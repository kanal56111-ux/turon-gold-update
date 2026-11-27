// Turon Gold veb-ilova: bloklangan. Eski dastur keshi o'chiriladi, sahifa har doim internetdan olinadi.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x.indexOf("tg-app-") === 0; }).map(function (x) { return caches.delete(x); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(function () { return fetch(self.registration.scope + "index.html"); }));
});
