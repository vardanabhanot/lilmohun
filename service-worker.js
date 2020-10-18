const staticCacheName = 'v1';
const assets = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./assets",
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("cashing in the shell");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (evt) => {
  console.log('service worker has been activated');
  //Remove cache
  evt.waitUntil(
    caches.keys().then(staticCacheName =>{
      return Promise.all(
        staticCacheName.map(cache =>{
          if(cache !== staticCacheName){
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      )
    })
  )
});

self.addEventListener("fetch", (evt) => {
  console.log('Service Woker: Fetch');
  evt.respondWith(
    fetch(evt.request).catch(() => caches.match(evt.request))
   
  )
});
