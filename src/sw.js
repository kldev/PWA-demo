workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.addPlugins([
  new workbox.broadcastUpdate.Plugin('precache-channel')
])


if (workbox) {
  console.log('Workbox is loaded');

  /* injection point for manifest files.  */
  console.log('__precacheManifest' + JSON.stringify(self.__precacheManifest));
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );
}
else {
  console.log('Workbox could not be loaded. No Offline support');
}

