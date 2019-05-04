<template>
  <div class="xs-text-2 md-text-2">
    <div
      v-if="elements"
      class="r full-height browse"
      :style="
        `height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`
      "
    >
      <div
        v-for="(p, index) in allitems"
        :key="index"
        class="xs-border-right xs-border-bottom bcg-item"
      >
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link
            class="styled-anchor xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center"
            :to="p._path"
          >
            {{ p.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="r full-height browse">
      <div
        class="xs-p2 c-100 xs-flex xs-flex-align-center xs-flex-justify-center xs-text-center"
        :style="
          `height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`
        "
      >
        <div v-if="total < 1 && !busy">
          No Results.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "allitems"],
  data() {
    return {
      currentPage: null,
      pageNumbers: [],
      pageNumberCount: 0,
      elements: [],
      query: 1,
      busy: false,
      count: 0
    }
  },
  computed: {
    offset() {
      if (this.queryParam > 1) {
        return Number(this.queryParam - 1) * 11
      } else {
        return 0
      }
    },
    prevpage() {
      var prev = Number(this.queryParam) - 1
      return prev
    },
    nextpage() {
      var next = Number(this.queryParam) + 1
      return next
    },
    navbarheight() {
      return this.$store.state.navheight
    },
    total() {
      return this.allitems.length
    },

    queryParam() {
      if (this.$route.query.page == null) {
        return 1
      } else {
        return Number(this.$route.query.page)
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    $route({ params, query }) {
      if (this.$route.query.page > 1) {
        this.loadMore()
        this.navHeight()
        this.pageCheck()
      } else if (this.$route.query.page == null) {
        this.$route.query.page = 1
        this.loadMore()
        this.navHeight()
        this.pageCheck()
      } else {
        this.loadMore()
        this.navHeight()
        this.pageCheck()
      }
    },
    queryParam: function() {
      this.loadMore()
    }
  },

  updated() {
    this.$nextTick(() => {
      this.pageCheck()
      this.navHeight()
    })
  },
  mounted() {
    if (process.browser) {
      this.loadMore()

      this.$nextTick(() => {
        this.navHeight()
        this.pageCheck()
        window.addEventListener("resize", this.onResize)
      })
    }
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    pageCheck() {
      if (this.allitems.length > 12) {
        this.$store.commit("paginateOn", true)
        this.$store.commit("resultsLength", this.allitems.length)
      } else if (this.allitems.length < 12) {
        this.$store.commit("paginateOff", false)
      } else {
        this.$store.commit("paginateOff", false)
      }
    },

    loadMore() {
      this.count = this.offset
      if (this.total > this.count && this.busy == false) {
        this.busy = true

        this.elements.splice(0)
        for (var i = 0, j = 12; i < j; i++) {
          let api = this.allitems[this.count]

          this.elements.push(api)
          this.count++
        }

        this.busy = false
      }
    },

    onResize(event) {
      this.navHeight()
    },

    navHeight() {
      if (process.browser) {
        var navHeight = document.getElementById("navbar").clientHeight

        this.$store.commit("SET_NAVHEIGHT", navHeight - 1)
      }
    }
  }
}
</script>

<style lang="scss">
.styled-anchor {
  text-transform: lowercase;
  font-variant: all-small-caps;
  font-size: 1.3rem;
}
</style>
