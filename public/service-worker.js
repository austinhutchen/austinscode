const CACHE_NAME = "austinscode-cache-v1";

// Fetch the list of assets from the JSON file
const fetchAssetList = async () => {
  const response = await fetch("/assets-to-cache.json");
  return response.json();
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const assetsToCache = await fetchAssetList();
      console.log("Caching assets:", assetsToCache);
      return cache.addAll(assetsToCache);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

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
