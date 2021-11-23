const CacheName = "Cache:v1";

//selfはサービスワーカー自身を指す。
self.addEventListener("install", (event) => {
  console.log("ServiceWorker install:", event);
});

self.addEventListener("activate", (event) => {
  console.log("ServiceWorker activate:", event);
});

const networkFallingBackToCache = async (request) => {
  const cache = await caches.open(CacheName);
  try {
    const response = await fetch(request);
    //response内容をcacheに保存
    await cache.put(request, response.clone());
    //responseを返却
    return response;
  } catch (err) {
    console.error(err);
    return cache.match(request);
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(networkFallingBackToCache(event.request));
});
