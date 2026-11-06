// pt-vote.js — voting jawaban + diskusi anonim per soal (Firebase Auth anonim + Firestore)
// Pakai: <script type="module" src="pt-vote.js"></script>
// lalu dari kode app: PTVote.mount(elemen, { qid, options, myAnswer, key })
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, addDoc, collection, query, where, limit,
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
const cleanId = s => String(s).replace(/[\/\s]+/g, "-").slice(0, 120);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

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
.ptv-err{color:#e5484d;font-size:12px}
`;
function injectCss() {
  if (document.getElementById("ptv-style")) return;
  const s = document.createElement("style"); s.id = "ptv-style"; s.textContent = css; document.head.appendChild(s);
}

/* ---------- data ---------- */
async function counts(qid, opts) {
  const res = await Promise.all(opts.map(o =>
    getCountFromServer(query(collection(db, "votes"), where("q", "==", qid), where("opt", "==", o)))
      .then(r => r.data().count)));
  return Object.fromEntries(opts.map((o, i) => [o, res[i]]));
}
async function myVote(qid) {
  const u = await ready;
  const d = await getDoc(doc(db, "votes", qid + "_" + u.uid));
  return d.exists() ? d.data().opt : null;
}
async function vote(qid, opt) {
  qid = cleanId(qid);
  opt = String(opt).toUpperCase();
  if (!LETTERS.includes(opt)) return;
  const u = await ready;
  await setDoc(doc(db, "votes", qid + "_" + u.uid), { q: qid, opt, uid: u.uid, t: serverTimestamp() });
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
  el.innerHTML = `<div class="ptv"><p class="ptv-h">Pilihan teman-teman <small>memuat…</small></p></div>`;
  const box = el.firstElementChild;

  let mine = null, c = {};
  try {
    if (cfg.myAnswer) { mine = String(cfg.myAnswer).toUpperCase(); await vote(qid, mine); }
    else mine = await myVote(qid);
    c = await counts(qid, opts);
  } catch (e) {
    box.innerHTML = `<p class="ptv-err">Vote belum bisa dimuat (${esc(e.code || e.message)}). Cek koneksi lalu buka soal lagi.</p>`;
    console.error("[PTVote]", e); return;
  }

  const renderBars = () => {
    const total = opts.reduce((s, o) => s + (c[o] || 0), 0);
    box.querySelector(".ptv-h small").textContent = total ? `${total} orang` : "belum ada vote";
    box.querySelector(".ptv-bars").innerHTML = opts.map(o => {
      const n = c[o] || 0, p = total ? Math.round(n / total * 100) : 0;
      return `<button type="button" class="ptv-bar ${o === mine ? "mine" : ""}" data-o="${o}" aria-pressed="${o === mine}">
        <i class="ptv-fill" style="width:${p}%"></i>
        <span class="ptv-l">${o}</span>
        ${o === mine ? `<span class="ptv-tag">pilihanmu</span>` : ""}
        ${o === key ? `<span class="ptv-tag">kunci file</span>` : ""}
        <span class="ptv-p">${p}% <small style="opacity:.6;font-weight:500">(${n})</small></span></button>`;
    }).join("");
  };

  box.innerHTML = `
    <p class="ptv-h">Pilihan teman-teman <small></small></p>
    <div class="ptv-bars"></div>
    <p class="ptv-note">Anonim. Ketuk opsi untuk vote atau ganti pilihan. Terbanyak belum tentu benar.</p>
    <div class="ptv-c">
      <p class="ptv-h">Diskusi <small class="ptv-cn"></small></p>
      <div class="ptv-list"></div>
      <form class="ptv-form">
        <textarea maxlength="500" placeholder="Tulis alasan atau sumbermu (anonim)…" aria-label="Tulis komentar"></textarea>
        <div class="ptv-row"><small class="ptv-left">500 karakter</small><button class="ptv-send" type="submit">Kirim</button></div>
      </form>
    </div>`;
  renderBars();

  box.querySelector(".ptv-bars").addEventListener("click", async e => {
    const b = e.target.closest(".ptv-bar"); if (!b) return;
    const o = b.dataset.o; if (o === mine) return;
    const prev = mine;
    if (prev) c[prev] = Math.max(0, (c[prev] || 1) - 1);
    c[o] = (c[o] || 0) + 1; mine = o; renderBars();
    try { await vote(qid, o); } catch (err) {
      console.error("[PTVote]", err);
      c[o]--; if (prev) c[prev]++; mine = prev; renderBars();
    }
  });

  const list = box.querySelector(".ptv-list"), cn = box.querySelector(".ptv-cn");
  const renderComments = arr => {
    cn.textContent = arr.length ? `${arr.length} komentar` : "";
    list.innerHTML = arr.length
      ? arr.map(x => `<div class="ptv-item">${esc(x.text)}<small>${timeAgo(x.t)}</small></div>`).join("")
      : `<p class="ptv-note" style="margin:0">Belum ada diskusi. Jadi yang pertama.</p>`;
  };
  let comments = [];
  loadComments(qid).then(a => { comments = a; renderComments(a); })
    .catch(err => { list.innerHTML = `<p class="ptv-err">Diskusi belum bisa dimuat.</p>`; console.error("[PTVote]", err); });

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
      left.textContent = "Gagal terkirim, coba lagi.";
    } finally { send.disabled = false; send.textContent = "Kirim"; }
  });
}

/* ---------- API global (bisa dipanggil dari script biasa) ---------- */
const api = { mount, vote, ready };
const queued = (window.PTVote && window.PTVote._q) || [];
window.PTVote = api;
queued.forEach(([fn, args]) => api[fn](...args));
