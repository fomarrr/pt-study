// pt-vote.js — voting jawaban + diskusi anonim per soal (Firebase Auth anonim + Firestore)
// Pakai: <script type="module" src="pt-vote.js"></script>
// lalu dari kode app: PTVote.mount(elemen, { qid, options, myAnswer, key })
//
// Versi hemat kuota (Spark: 50.000 baca & 20.000 tulis per hari):
// - Diskusi selalu dimuat segar setiap soal dibuka (prioritas).
// - Vote hanya dikirim bila pilihan berubah (diingat per perangkat), bukan setiap soal dibuka.
// - Jumlah vote di-cache 10 menit per soal; vote sendiri langsung diperhitungkan di tampilan.
// - Diskusi dan jumlah vote dimuat terpisah: bila salah satu gagal (mis. kuota habis), yang lain tetap tampil.
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import {
  getFirestore, doc, setDoc, addDoc, collection, query, where, limit,
  getDocs, getCountFromServer, serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDn4RZOu-YoK-DrMBYTQOz7wclcmj-UMyc",
  authDomain: "fir-config-7d9b4.firebaseapp.com",
  projectId: "fir-config-7d9b4",
  storageBucket: "fir-config-7d9b4.firebasestorage.app",
  messagingSenderId: "847236629232",
  appId: "1:847236629232:web:49253480986296d63d3835"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const ready = new Promise((resolve, reject) => {
  const off = onAuthStateChanged(auth, u => { if (u) { off(); resolve(u); } });
  signInAnonymously(auth).catch(reject);
});

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const COUNT_TTL = 10 * 60 * 1000; // jumlah vote di-cache 10 menit per soal
const cleanId = s => String(s).replace(/[\/\s]+/g, "-").slice(0, 120);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- penyimpanan lokal (aman bila diblokir) ---------- */
const store = {
  get(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ } }
};
const sentKey = (uid, qid) => `ptv:v:${uid}:${qid}`;   // vote terakhir yang sudah terkirim dari perangkat ini
const countKey = qid => `ptv:c:${qid}`;                // { t, c:{A:n,...} }

function errText(e) {
  const code = (e && (e.code || e.message)) || "";
  if (/resource-exhausted|quota/i.test(code)) return "kuota harian Firebase sedang habis. Coba lagi setelah pukul 15.00 WIB.";
  if (/unauthorized-domain/i.test(code)) return "domain situs belum diizinkan di Firebase (Authorized domains).";
  if (/permission-denied/i.test(code)) return "ditolak oleh aturan Firestore (permission-denied).";
  return `belum bisa dimuat (${esc(code || "koneksi")}). Cek koneksi lalu buka soal lagi.`;
}

function timeAgo(ts) {
  if (!ts || !ts.toDate) return "baru saja";
  const s = (Date.now() - ts.toDate().getTime()) / 1000;
  if (s < 60) return "baru saja";
  if (s < 3600) return Math.floor(s / 60) + " mnt lalu";
  if (s < 86400) return Math.floor(s / 3600) + " jam lalu";
  if (s < 86400 * 30) return Math.floor(s / 86400) + " hari lalu";
  return ts.toDate().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

/* ---------- gaya: ikut warna teks app (currentColor) supaya aman di light & dark ---------- */
const css = `
.ptv{--ptv-accent:#3b82f6;margin-top:14px;padding:12px 14px;border-radius:12px;
  border:1px solid color-mix(in srgb,currentColor 18%,transparent);
  background:color-mix(in srgb,currentColor 4%,transparent);font-size:14px;line-height:1.4}
.ptv-h{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:0 0 8px;font-weight:700;font-size:13px;letter-spacing:.02em}
.ptv-h small{font-weight:500;opacity:.65}
.ptv-bars{display:flex;flex-direction:column;gap:6px}
.ptv-bar{position:relative;display:flex;align-items:center;gap:8px;width:100%;text-align:left;cursor:pointer;
  font:inherit;color:inherit;background:transparent;border:1px solid color-mix(in srgb,currentColor 14%,transparent);
  border-radius:8px;padding:7px 10px;overflow:hidden}
.ptv-bar:hover{border-color:color-mix(in srgb,currentColor 35%,transparent)}
.ptv-bar:focus-visible{outline:2px solid var(--ptv-accent);outline-offset:2px}
.ptv-fill{position:absolute;inset:0 auto 0 0;background:color-mix(in srgb,var(--ptv-accent) 22%,transparent);transition:width .4s ease}
.ptv-bar.mine{border-color:var(--ptv-accent)}
.ptv-bar.mine .ptv-fill{background:color-mix(in srgb,var(--ptv-accent) 38%,transparent)}
.ptv-bar>span{position:relative}
.ptv-l{font-weight:700;width:1.3em}
.ptv-tag{font-size:11px;font-weight:700;padding:1px 6px;border-radius:999px;border:1px solid currentColor;opacity:.75}
.ptv-p{margin-left:auto;font-variant-numeric:tabular-nums;font-weight:600}
.ptv-note{font-size:12px;opacity:.65;margin:6px 0 0}
.ptv-c{margin-top:12px;border-top:1px dashed color-mix(in srgb,currentColor 20%,transparent);padding-top:10px}
.ptv-list{display:flex;flex-direction:column;gap:8px;max-height:320px;overflow-y:auto;margin:6px 0 8px}
.ptv-item{padding:8px 10px;border-radius:8px;background:color-mix(in srgb,currentColor 6%,transparent);white-space:pre-wrap;word-wrap:break-word}
.ptv-item small{display:block;opacity:.55;font-size:11px;margin-top:3px}
.ptv-form{display:flex;flex-direction:column;gap:6px}
.ptv-form textarea{font:inherit;color:inherit;background:transparent;resize:vertical;min-height:60px;padding:8px 10px;border-radius:8px;
  border:1px solid color-mix(in srgb,currentColor 22%,transparent)}
.ptv-row{display:flex;justify-content:space-between;align-items:center;gap:8px}
.ptv-row small{opacity:.6;font-size:12px}
.ptv-send{font:inherit;font-weight:700;cursor:pointer;border:0;border-radius:8px;padding:7px 14px;background:var(--ptv-accent);color:#fff}
.ptv-send:disabled{opacity:.5;cursor:default}
.ptv-err{color:#e5484d;font-size:12px;margin:4px 0 0}
`;
function injectCss() {
  if (document.getElementById("ptv-style")) return;
  const s = document.createElement("style"); s.id = "ptv-style"; s.textContent = css; document.head.appendChild(s);
}

/* ---------- data ---------- */
// Jumlah vote: 1 baca per opsi; dipakai dari cache bila belum 10 menit
async function fetchCounts(qid, opts) {
  const res = await Promise.all(opts.map(o =>
    getCountFromServer(query(collection(db, "votes"), where("q", "==", qid), where("opt", "==", o)))
      .then(r => r.data().count)));
  const c = Object.fromEntries(opts.map((o, i) => [o, res[i]]));
  store.set(countKey(qid), { t: Date.now(), c });
  return c;
}
function cachedCounts(qid) {
  const x = store.get(countKey(qid));
  return x && x.c ? x : null;
}
function bumpCachedCounts(qid, prev, next) {
  const x = cachedCounts(qid); if (!x) return;
  if (prev && x.c[prev] > 0) x.c[prev]--;
  if (next) x.c[next] = (x.c[next] || 0) + 1;
  store.set(countKey(qid), x);
}

// Kirim vote hanya bila berbeda dari vote terakhir yang sudah terkirim dari perangkat ini.
async function vote(qid, opt) {
  qid = cleanId(qid);
  opt = String(opt).toUpperCase();
  if (!LETTERS.includes(opt)) return false;
  const u = await ready;
  const prev = store.get(sentKey(u.uid, qid));
  if (prev === opt) return false;
  await setDoc(doc(db, "votes", qid + "_" + u.uid), { q: qid, opt, uid: u.uid, t: serverTimestamp() });
  store.set(sentKey(u.uid, qid), opt);
  bumpCachedCounts(qid, prev, opt);
  return true;
}
async function sentVote(qid) {
  const u = await ready;
  return store.get(sentKey(u.uid, qid));
}
async function loadComments(qid) {
  const snap = await getDocs(query(collection(db, "comments"), where("q", "==", qid), limit(200)));
  return snap.docs.map(d => d.data()).sort((a, b) => (b.t?.seconds || 0) - (a.t?.seconds || 0));
}
async function addComment(qid, text) {
  const u = await ready;
  await addDoc(collection(db, "comments"), { q: qid, text, uid: u.uid, t: serverTimestamp() });
}

/* ---------- UI ---------- */
async function mount(el, cfg) {
  if (!el) return;
  injectCss();
  const qid = cleanId(cfg.qid);
  const opts = (cfg.options && cfg.options.length ? cfg.options : LETTERS.slice(0, 5)).map(o => String(o).toUpperCase());
  const key = cfg.key != null ? String(cfg.key).toUpperCase() : null;

  el.innerHTML = `
    <div class="ptv">
      <div class="ptv-v">
        <p class="ptv-h">Pilihan teman-teman <small class="ptv-tot">memuat…</small></p>
        <div class="ptv-bars"></div>
        <p class="ptv-note">Anonim. Ketuk opsi untuk vote atau ganti pilihan. Terbanyak belum tentu benar.</p>
      </div>
      <div class="ptv-c">
        <p class="ptv-h">Diskusi <small class="ptv-cn">memuat…</small></p>
        <div class="ptv-list"></div>
        <form class="ptv-form">
          <textarea maxlength="500" placeholder="Tulis alasan atau sumbermu (anonim)…" aria-label="Tulis komentar"></textarea>
          <div class="ptv-row"><small class="ptv-left">500 karakter</small><button class="ptv-send" type="submit">Kirim</button></div>
        </form>
      </div>
    </div>`;
  const box = el.firstElementChild;
  const alive = () => box.isConnected; // soal sudah diganti -> kotak lama berhenti diperbarui

  /* --- Diskusi (prioritas): selalu dimuat segar setiap soal dibuka --- */
  const list = box.querySelector(".ptv-list"), cn = box.querySelector(".ptv-cn");
  let comments = [];
  const renderComments = arr => {
    cn.textContent = arr.length ? `${arr.length} komentar` : "";
    list.innerHTML = arr.length
      ? arr.map(x => `<div class="ptv-item">${esc(x.text)}<small>${timeAgo(x.t)}</small></div>`).join("")
      : `<p class="ptv-note" style="margin:0">Belum ada diskusi. Jadi yang pertama.</p>`;
  };
  loadComments(qid)
    .then(a => { if (!alive()) return; comments = a; renderComments(a); })
    .catch(err => { console.error("[PTVote]", err); if (!alive()) return; cn.textContent = ""; list.innerHTML = `<p class="ptv-err">Diskusi ${errText(err)}</p>`; });

  const form = box.querySelector(".ptv-form"), ta = form.querySelector("textarea"),
        send = form.querySelector(".ptv-send"), left = form.querySelector(".ptv-left");
  ta.addEventListener("input", () => { left.textContent = `${500 - ta.value.length} karakter tersisa`; });
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const text = ta.value.trim(); if (!text) return;
    send.disabled = true; send.textContent = "Mengirim…";
    try {
      await addComment(qid, text);
      comments.unshift({ text, t: null }); renderComments(comments);
      ta.value = ""; left.textContent = "500 karakter";
    } catch (err) {
      console.error("[PTVote]", err);
      left.textContent = /resource-exhausted|quota/i.test((err && err.code) || "") ? "Kuota harian habis, coba lagi nanti." : "Gagal terkirim, coba lagi.";
    } finally { send.disabled = false; send.textContent = "Kirim"; }
  });

  /* --- Vote: tulis hanya bila berubah; hitungan dari cache bila masih baru --- */
  const voteSec = box.querySelector(".ptv-v"), bars = box.querySelector(".ptv-bars"), tot = box.querySelector(".ptv-tot");
  let mine = null, c = null;
  const renderBars = () => {
    if (!c) return;
    const total = opts.reduce((s, o) => s + (c[o] || 0), 0);
    tot.textContent = total ? `${total} orang` : "belum ada vote";
    bars.innerHTML = opts.map(o => {
      const n = c[o] || 0, p = total ? Math.round(n / total * 100) : 0;
      return `<button type="button" class="ptv-bar ${o === mine ? "mine" : ""}" data-o="${o}" aria-pressed="${o === mine}">
        <i class="ptv-fill" style="width:${p}%"></i>
        <span class="ptv-l">${o}</span>
        ${o === mine ? `<span class="ptv-tag">pilihanmu</span>` : ""}
        ${o === key ? `<span class="ptv-tag">kunci file</span>` : ""}
        <span class="ptv-p">${p}% <small style="opacity:.6;font-weight:500">(${n})</small></span></button>`;
    }).join("");
  };
  const showVoteErr = err => {
    console.error("[PTVote]", err);
    const old = voteSec.querySelector(".ptv-err"); if (old) old.remove();
    voteSec.insertAdjacentHTML("beforeend", `<p class="ptv-err">Vote ${errText(err)}</p>`);
  };

  (async () => {
    try {
      // jawaban di app hanya dipakai sebagai vote pertama; bila sudah pernah vote (atau ganti lewat tombol), pakai vote itu
      mine = await sentVote(qid);
      if (!mine && cfg.myAnswer) { mine = String(cfg.myAnswer).toUpperCase(); await vote(qid, mine); }
    } catch (err) { if (alive()) showVoteErr(err); }
    if (!alive()) return;
    const cached = cachedCounts(qid);
    if (cached) { c = cached.c; renderBars(); }        // tampilkan yang tersimpan dulu (juga berguna saat kuota habis)
    if (!cached || Date.now() - cached.t > COUNT_TTL) {
      try { c = await fetchCounts(qid, opts); if (alive()) renderBars(); }
      catch (err) { if (!alive()) return; if (!c) tot.textContent = ""; showVoteErr(err); }
    }
  })();

  bars.addEventListener("click", async e => {
    const b = e.target.closest(".ptv-bar"); if (!b || !c) return;
    const o = b.dataset.o; if (o === mine) return;
    const prevMine = mine, before = { ...c };
    if (prevMine) c[prevMine] = Math.max(0, (c[prevMine] || 1) - 1);
    c[o] = (c[o] || 0) + 1; mine = o; renderBars();
    try { await vote(qid, o); } catch (err) {
      c = before; mine = prevMine; renderBars(); showVoteErr(err);
    }
  });
}

/* ---------- API global (bisa dipanggil dari script biasa) ---------- */
const api = { mount, vote, ready };
const queued = (window.PTVote && window.PTVote._q) || [];
window.PTVote = api;
queued.forEach(([fn, args]) => api[fn](...args));
