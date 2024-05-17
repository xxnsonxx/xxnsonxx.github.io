const urlsToCache = [
    "/",
    "img/apple-touch-icon.png",
    "img/favicon.png",
    "img/icon-192-maskable.png",
    "img/icon-192.png",
    "img/icon-512-maskable.png",
    "img/icon-512.png"
  ];
   
  self.addEventListener("install", (event) => {
    let cacheUrls = async () => {
       const cache = await caches.open("pwa-assets");
       return cache.addAll(urlsToCache);
    };
    event.waitUntil(cacheUrls());
  });
   
  self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request));
  });