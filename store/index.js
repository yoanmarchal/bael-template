export const state = () => ({
  menuIsActive: false,
  menuInitial: true,
  blogPosts: [],
  allPages: [],
  navheight: 60,
  blogTitle: "",
  siteInfo: [],
  connect: [],
  allTags: [],
  gridItems: [],
  gridNumPosts: "11",
  gridNumCats: "11",
  gridOffset: "0",
  theThumbnail: "",
  theCategory: "",
  theCrumb: "",
  allCats: [],
  results: [],
  resultsnum: [],
  pagination: false
})

export const mutations = {
  SET_POSTS(state, data) {
    state.blogPosts = data
  },
  SET_PAGES(state, data) {
    state.allPages = data
  },
  SET_CATS(state, data) {
    state.allCats = data
  },
  SET_CRUMB(state, data) {
    state.theCrumb = data
  },
  SET_GRIDITEMS(state, data) {
    state.gridItems = data
  },
  SET_GRIDNUMPOSTS(state, data) {
    state.gridNumPosts = data
  },
  SET_GRIDNUMCATS(state, data) {
    state.gridNumCats = data
  },
  SET_GRIDOFFSET(state, data) {
    state.gridOffset = data
  },
  SET_POSTCAT(state, data) {
    state.theCategory = data
  },
  SET_TAGS(state, data) {
    state.allTags = data
  },
  SET_THUMB(state, data) {
    state.theThumbnail = data
  },
  SET_TITLE(state, data) {
    state.blogTitle = data
  },
  SET_NAVHEIGHT(state, data) {
    state.navheight = data
  },
  SET_INFO(state, data) {
    state.siteInfo = data
  },
  SET_CONNECT(state, data) {
    state.connect = data
  },
  SET_RESULTS(state, data) {
    state.results = data
  },
  paginateOn(state, data) {
    state.pagination = data
  },
  paginateOff(state, data) {
    state.pagination = data
  },
  resultsLength(state, data) {
    state.resultsnum = data
  },
  setMenuState(state, menuIsActive) {
    state.menuIsActive = menuIsActive
  },

  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("getSiteInfo")
    await dispatch("getBlogPosts")
    await dispatch("getPages")
  },
  async getBlogPosts({ commit }) {
    const context = await require.context(
      "~/content/blog/posts/",
      false,
      /\.json$/
    )
    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }))
    commit("SET_POSTS", searchposts.reverse())
  },
  async getPages({ commit }) {
    const context = await require.context(
      "~/content/page/posts/",
      false,
      /\.json$/
    )
    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/page/${key.replace(".json", "").replace("./", "")}`
    }))
    commit("SET_PAGES", pages)
  },
  setGridNumPosts({ state }) {
    if (state.blogPosts > 13) {
      this.$store.commit("SET_GRIDNUMPOSTS", 12)
    }
  },
  setGridNumCats({ state }) {
    if (state.allCats > 13) {
      this.$store.commit("SET_GRIDNUMCATS", 12)
    }
  },
  async getCats({ commit }) {
    const context = await require.context(
      "@/content/categories/posts/",
      false,
      /\.json$/
    )
    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/category/${key.replace(".json", "").replace("./", "")}`
    }))
    commit("SET_CATS", pages)
  },
  async getTags({ commit }) {
    const context = await require.context(
      "@/content/tags/posts/",
      false,
      /\.json$/
    )

    const tags = await context.keys().map(key => ({
      ...context(key),
      _path: `/tagged/${key.replace(".json", "").replace("./", "")}`
    }))

    commit("SET_TAGS", tags)
  },
  getSiteInfo({ commit }) {
    const info = require("~/content/setup/info.json")
    const connect = require("~/content/setup/connect.json")
    const context = require.context("~/content/blog/posts/", false, /\.json$/)
    const searchposts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace(".json", "").replace("./", "")}`
    }))
    commit("SET_POSTS", searchposts)
    commit("SET_INFO", info)
    commit("SET_CONNECT", connect)
  }
}

export const getters = {
  getallcats: state => state.allCats
}
