const CACHE_NAME = 'imperio-decorativo-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/imperio-decorativo/',
  '/imperio-decorativo/index.html',
  '/imperio-decorativo/manifest.json',
  '/imperio-decorativo/icon-192.png',
  '/imperio-decorativo/icon-512.png',
  // Agrega aquí otros archivos que quieras cachear (CSS, JS, imágenes)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
});
