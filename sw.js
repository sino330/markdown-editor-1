const { cache } = require("webpack");

const CacheName="Cache:v1"

//selfはサービスワーカー自身を指す。
self.addEventListener("install", (event) => {
  console.log("ServiceWorker install:", event);
});

self.addEventListener("activate", (event) => {
  console.log("ServiceWorker activate:", event);
});

const networkFallingBackToCache=async(request)=>{
    const cache=await caches.open(CacheName)
    try{
        const response=await fetch(request)
        await cache.put(request,response.clone())
        return response
    }catch(err){
        console.log(err)
        return cache.match(request)
    }
}

self.addEventListener("fetch",(event)=>{
  //fetchとはnetworkなどを経由してresourceを取得するために使用するAPI
  console.log("Fetch to:", event, request.url);
  event.respondWith(event.request);
})
