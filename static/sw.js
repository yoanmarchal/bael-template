importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/211463750da299027bc1.js",
    "revision": "d48cd953dda44fbdf373b6971c063efd"
  },
  {
    "url": "/_nuxt/26408c6262b8e2ef2b0b.js",
    "revision": "6ab818220173ea691443b396bb912021"
  },
  {
    "url": "/_nuxt/32032ff3892f2717afd3.js",
    "revision": "f5097d801f300851665fef9c3445ae17"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/525e416122a1e175fc3b.js",
    "revision": "517184ad97f37cf0199811cf4d20f3b9"
  },
  {
    "url": "/_nuxt/546f4a3866a6a2021490.js",
    "revision": "dd3d09e8015d78bdcb795eb6e5bc70d9"
  },
  {
    "url": "/_nuxt/69949c8c1ea7f7607990.js",
    "revision": "bc8b8de5c03a84aba93b0654c4d1b6de"
  },
  {
    "url": "/_nuxt/93c6df1c58979259f06e.js",
    "revision": "835810610e71b45fa9dedfd404b13907"
  },
  {
    "url": "/_nuxt/ac216f72e9b244011302.js",
    "revision": "9abf720c798f2f20477ebe6fdff3c37e"
  },
  {
    "url": "/_nuxt/acc244ce375cb19d6f82.css",
    "revision": "d5f830f5bb4568d1926e7bee8db8505f"
  },
  {
    "url": "/_nuxt/ba1de0d0e4f21fab99e2.css",
    "revision": "d4e1ffd2288b8f85111e3985472a1409"
  },
  {
    "url": "/_nuxt/c717ac5842892cb899cc.js",
    "revision": "5a8a058b8e01e095788471e1308a5ae4"
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
