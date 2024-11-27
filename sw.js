self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/ETM-test/",
          "/ETM-test/index.html",
          "/ETM-test/index.js",
          "/ETM-test/style.css",
          "/ETM-test/main.js",
          "/ETM-test/motor.JPG",
          "/ETM-test/actuator.JPG",
          "/ETM-test/coupling.JPG",
          "/ETM-test/Cheveron_process copy-frei.png",
          "/ETM-test/download.png",
          "/ETM-test/environment.env",
          "/ETM-test/gkn-au-stacked.svg",
          "/ETM-test/TaycanGearRotation11.glb",
          "/ETM-test/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Lt.otf",
          "/ETM-test/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Bd.otf",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
