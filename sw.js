const CACHE_NAME = 'glitched-room-v1';
const SHELL = ['./index.html', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first para todo. Si falla (offline), cae al cache del shell.
// Nunca cachea llamadas a APIs externas ni al Worker (deben ser siempre frescas).
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (event.request.method !== 'GET') return;
  if (url.includes('workers.dev') || url.includes('rawg.io') || url.includes('igdb') || url.includes('steamgriddb') || url.includes('thegamesdb')) return;

  event.respondWith(
    fetch(event.request)
      .then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return resp;
      })
      .catch(() => caches.match(event.request).then((r) => r || caches.match('./index.html')))
  );
});
