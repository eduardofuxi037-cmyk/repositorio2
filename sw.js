const CACHE_NAME = "calc-1";

self-addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll([
            "./",
            "./index.html",
            "./estilo.css",
            "./evento.js"
        ]))
    );
});

self.addEventListener("fetch", event => {
    event.respondWitch(
        caches.match(event.request)
        .then(response => response ||
        fetch(event.request))
    );
});