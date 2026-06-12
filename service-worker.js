const CACHE_NAME = 'cmms-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  'https://rsms.me/inter/inter.css',
  'https://unpkg.com/@supabase/supabase-js@2',
  'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
