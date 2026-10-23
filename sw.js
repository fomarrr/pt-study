// Service worker Progress Test: membuat aplikasi bisa dipasang & dibuka offline.
// File lokal (HTML & soal): ambil dari jaringan dulu supaya selalu versi terbaru, simpan salinannya untuk offline.
// File CDN (Tailwind, font): pakai salinan tersimpan, perbarui di latar belakang.
const CACHE = 'pt-cache-v1';
const CORE = [
  './',
  './Mentoring_PT_2026.html',
  './manifest.webmanifest',
  './questions.js', './questions2.js', './questions3.js', './questions4.js', './questions5.js',
  './questions6.js', './questions7.js', './questions8.js', './questions9.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'
];
const CDN = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
];
const CDN_HOSTS = ['cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(CORE.map(u => cache.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    await Promise.all(CDN.map(u => fetch(u, { mode: 'no-cors' }).then(r => cache.put(u, r)).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('pt-cache-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

function timeout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)); }

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // Jaringan dulu (maks. 4 detik), cadangan dari cache bila offline
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await Promise.race([fetch(req), timeout(4000)]);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      } catch (e) {
        const cached = await cache.match(req, { ignoreSearch: true });
        if (cached) return cached;
        if (req.mode === 'navigate') {
          const page = await cache.match('./Mentoring_PT_2026.html') || await cache.match('./');
          if (page) return page;
        }
        throw e;
      }
    })());
    return;
  }

  if (CDN_HOSTS.includes(url.hostname)) {
    // Salinan tersimpan dulu, perbarui di latar belakang
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const network = fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      }).catch(() => cached);
      if (cached) { event.waitUntil(network); return cached; }
      return network;
    })());
  }
});
