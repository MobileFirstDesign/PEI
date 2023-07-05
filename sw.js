self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/index.html',
      '/eats/img2.webp',
      '/goplaces/gallery/img1.webp',
      '/eats/index.html',
      '/goplaces/index.html',
      '/map/index.html',
      '/offline.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});