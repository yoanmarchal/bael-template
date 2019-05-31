/* eslint-disable prettier/prettier */
import siteInfo from './content/setup/info.json'
import glob from 'glob'
import path from 'path'

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  "/blog": "blog/posts/*.json",
  "/page": "page/posts/*.json",
  "/category": "categories/posts/*.json"
  // "/tagged": "tags/posts/*.json"
})

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  pageTransition: { mode: "in-out" },
  head: {
    title: siteInfo.sitename,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteInfo.sitedescription
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com/",
        crossorigin: true
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com/",
        crossorigin: true
      }
    ]
  },
  css: ["~/assets/grid.css", "bf-solid/dist/solid.latest.css"],
  // icon: {
  //   iconSrc: `${siteInfo.siteicon}`
  //  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  modules: ["@nuxtjs/markdownit", "@nuxtjs/pwa", "@nuxtjs/axios", 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Archivo+Black:400'] //Loads Lato font with weights 400 and 700
    }
  },
  markdownit: {
    injected: true,
    preset: "default",
    breaks: true,
    html: true
  },
  manifest: {
    name: siteInfo.sitename,
    short_name: siteInfo.sitename,
    description: siteInfo.sitedescription,
    lang: "en"
  },
  workbox: {
    fetch: true,
    runtimeCaching: [
      {
        urlPattern: "/images/uploads/.*",
        handler: "cacheFirst",
        strategyOptions: {
          cacheName: "image-cache",
          cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 86400
          }
        }
      }
    ]
  },

  /*
   ** Route config for pre-rendering
   */
  router: {
    // eslint-disable-next-line no-unused-vars
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: ["title"]
  },
  generate: {
    routes: dynamicRoutes
  },
  plugins: [
    "~/plugins/vuefuse",
    {
      src: "~/plugins/moment",
      ssr: false
    }
  ],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true
    /*
     ** Run ESLint on save
     */
  }
}
/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".json")}`)
    })
  )
}
