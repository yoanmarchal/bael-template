importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0bf2d770d9bc8e8d721d.js",
    "revision": "e5408fdc5326a8b1acbb445e28035439"
  },
  {
    "url": "/_nuxt/1d60a6eaa98c1839a726.js",
    "revision": "c06ca02e1423bbb396c19c6ae80224b9"
  },
  {
    "url": "/_nuxt/41957ec929a04bf4db7d.js",
    "revision": "767d78325fc835e985b8b6284d18b87f"
  },
  {
    "url": "/_nuxt/4c8e4562320b7252c346.js",
    "revision": "aa82c78c321f379f33c7a9bd2e8035f7"
  },
  {
    "url": "/_nuxt/5efa8d5fcfc3900114d9.js",
    "revision": "3ab73696f8a193525b594bef8b535088"
  },
  {
    "url": "/_nuxt/6f468cadafb9206c5ac4.js",
    "revision": "2d0d9ed18df9ee85a1a69e0fe8de4c98"
  },
  {
    "url": "/_nuxt/7473c7d4ea996951356e.js",
    "revision": "33013be728df7f7fd79085d295ee4c4b"
  },
  {
    "url": "/_nuxt/83a7796635b08f5f48ec.js",
    "revision": "3ac5fc550351c1adbcb19dc2eb071552"
  },
  {
    "url": "/_nuxt/8ae806c5fcb54a8c1b78.js",
    "revision": "b2daa939515bcd5893c5e9798b45f6f2"
  },
  {
    "url": "/_nuxt/bb399cd1a0e3f9723c70.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/cbb7866b9efd6c57b29f.css",
    "revision": "b1030c8fac6751b6f1a187b6c4a36fbf"
  },
  {
    "url": "/_nuxt/de21d66a3ddb4e5323e5.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/f79798e3716b50df2e42.css",
    "revision": "bee4abef23bd4e075259dbb55eb2a8cf"
  },
  {
    "url": "/_nuxt/ff94613e6c776c14bd0c.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
