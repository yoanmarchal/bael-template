importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e5129f552d04ba087e7.js",
    "revision": "73385ae36898ab8d89fd08ea86bf6c4e"
  },
  {
    "url": "/_nuxt/664e6282432c0a953d49.js",
    "revision": "6d425fcdd0c33fbf4477edb1ecfbc94a"
  },
  {
    "url": "/_nuxt/75dd1a9a8528635caa64.js",
    "revision": "76688ffac3b8b117715e1490aecb40c7"
  },
  {
    "url": "/_nuxt/7f7ce6b9e5a2a114575b.js",
    "revision": "4fab0f85abe08ef3ee218bd7520d1988"
  },
  {
    "url": "/_nuxt/8380577dbb8461baf64d.js",
    "revision": "a80e551640e65e7dfa471271b850ba26"
  },
  {
    "url": "/_nuxt/8bba123576329400d15f.js",
    "revision": "39af36a0bf464e2d5f8ffb35a2f8d594"
  },
  {
    "url": "/_nuxt/8be0f8bef3aa418d3df4.js",
    "revision": "9e7b466ee37d19a20cf9866925723a6b"
  },
  {
    "url": "/_nuxt/8cbf8e30dae1d79c984f.js",
    "revision": "96d3cc7e35a8d16aee118a1b71c19d68"
  },
  {
    "url": "/_nuxt/8cebc8be64ab6fd730e7.js",
    "revision": "c01dc87e86032771fe4a2f65448c7deb"
  },
  {
    "url": "/_nuxt/8eb006f8400f69b0494e.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/ba1de0d0e4f21fab99e2.css",
    "revision": "d4e1ffd2288b8f85111e3985472a1409"
  },
  {
    "url": "/_nuxt/f88ab3274df6daa2e01c.css",
    "revision": "b49ba1e52a387f72f94c51aa589e5f4a"
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





