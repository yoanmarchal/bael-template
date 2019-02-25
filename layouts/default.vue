<template>
  <div class="app">
    <header>
      <BaelHeader
          :blogtitle="blogtitle"
          :thecrumb="this.$store.state.theCrumb"
          :posts="blogposts"
        />
    </header>
    <main>
      <nuxt />
      <SlideOut />
    </main>
    <footer>
      <BaelFooter :pagination="paginate" />
    </footer>
  </div>
</template>
<script>
import SlideOut from "~/components/SlideOut"
import BaelFooter from "~/components/BaelFooter"
import BaelHeader from "~/components/BaelHeader"

export default {
  components: {
    SlideOut,
    BaelHeader,
    BaelFooter
  },
  data() {
    return {
      email: { email: "" }
    }
  },
  computed: {
    paginate() {
      return this.$store.state.pagination
    },
    blogposts() {
      return this.$store.state.blogPosts
    },
    blogtitle() {
      return this.$store.state.blogTitle
    }
  },
  updated() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight()
      })
    }
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight()
      })
    }
  },
  methods: {
    navHeight() {
      if (process.browser) {
        var height = document.getElementById("navbar").clientHeight
        this.$store.commit("SET_NAVHEIGHT", height - 1)
      }
    }
  }
}
</script>

<style>
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.main-title {
  font-size: 3rem;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  line-height: 1;
}
.feat-wrapper {
  max-height: 55vh;
  width: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
  transform: translate(50%, 0);
  opacity: 0;
  transition: all 0.25s;
}
.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-50%, 0);
  opacity: 0;
  transition: all 0.25s;
}
.slide-down-enter,
.slide-up-leave-active {
  transform: translate(0, 50%);
  opacity: 1;
  transition: all 0.25s;
}
.slide-down-leave-active,
.slide-up-enter {
  transform: translate(0, -50%);
  opacity: 1;
  transition: all 0.25s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.post-content {
  max-width: 75ch;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
</style>
