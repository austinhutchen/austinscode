const CACHE_NAME = "austinscode-cache-v1";
const fs = require("fs");
const path = require("path");

const imageDir = path.join(__dirname, "public/fast_imgs");
const images = fs.readdirSync(imageDir).map((file) => `/fast_imgs/${file}`);

console.log("Assets to Cache:", JSON.stringify(images));

// Install the service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch assets from the cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Serve cached response if found, otherwise fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});

// Activate service worker and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Clearing old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
