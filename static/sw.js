importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0cf675f0472a38141cee.js",
    "revision": "cdeb0ee9b66aad25affd62b7219116b3"
  },
  {
    "url": "/_nuxt/0e8336baea765450df81.js",
    "revision": "ae973b62e644bf93be6f134964f848c8"
  },
  {
    "url": "/_nuxt/1eb83336e1c7e84ce7cb.js",
    "revision": "89ac247379ce04aa748a4349d8074c64"
  },
  {
    "url": "/_nuxt/25f4273e6fe130364e77.js",
    "revision": "d8659b3cfa9239850276f9b912381bea"
  },
  {
    "url": "/_nuxt/26408c6262b8e2ef2b0b.js",
    "revision": "6ab818220173ea691443b396bb912021"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/4b114a6213c996397f5e.js",
    "revision": "7fe18fcbb8cacf2c7261d84c0686e482"
  },
  {
    "url": "/_nuxt/766afb454c45a92db9af.js",
    "revision": "584bad72df3b37018f8865055e4abb56"
  },
  {
    "url": "/_nuxt/ac216f72e9b244011302.js",
    "revision": "9abf720c798f2f20477ebe6fdff3c37e"
  },
  {
    "url": "/_nuxt/b3391eca1df7a5e1b41b.js",
    "revision": "6be3a3f101fee8d9e658f63d7098f47b"
  },
  {
    "url": "/_nuxt/ba1de0d0e4f21fab99e2.css",
    "revision": "d4e1ffd2288b8f85111e3985472a1409"
  },
  {
    "url": "/_nuxt/e92a423d0c06473c672d.css",
    "revision": "affdaddb4a6efa8926dfce95c34df136"
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
