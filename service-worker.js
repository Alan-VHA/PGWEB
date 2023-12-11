const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/css/estilos.css',
  '/img/logo.png',
  '/img/img-1.jpg',
  '/img/img-2.jpg',
  '/img/img-3.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
