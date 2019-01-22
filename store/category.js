export const state = () => ({
  theCategory: "",
  allCats: [],
  fetched: false
})

export const mutations = {
  SET_CATS(state, data) {
    state.allCats = data
  },
  SET_POSTCAT(state, data) {
    state.theCategory = data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("getCats")
  },
  async getCats({ commit }) {
    const context = await require.context(
      "~/content/categories/posts/",
      false,
      /\.json$/
    )
    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/category/${key.replace(".json", "").replace("./", "")}`
    }))
    commit("SET_CATS", pages)
  }
}

export const getters = {
  getallcats: state => state.allCats
}
