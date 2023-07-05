self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store2').then((cache) => cache.addAll([
      '/PEI/index.html',
      '/PEI/eats/img2.webp',
      '/PEI/goplaces/gallery/img1.webp',
      '/PEI/eats/index.html',
      '/PEI/goplaces/index.html',
      '/PEI/map/index.html',
      '/PEI/offline.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
