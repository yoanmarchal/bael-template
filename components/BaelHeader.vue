<template>
  <nav id="navbar" ref="navBar" class="">
    <div class="r">
      <div class="c-4 xs-text-left xs-p2">
        <div class="item">
          <nuxt-link class="sitename" to="/" exact>
            {{ headerSiteName }}
          </nuxt-link>
        </div>
      </div>
      <div class="c-4 xs-flex xs-flex-justify-start xs-flex-align-center">
        <div class="item xs-flex">
          <VueFuse
            placeholder="Search"
            :comp-results="compResults"
            :keys="keys"
            :list="allPosts"
            event-name="searchChanged"
          />
        </div>
      </div>
      <div class="c-4 xs-hide sm-block">
        
      </div>
      <div
        v-if="blogtitle"
        style="z-index:55;"
        class="c-12 xs-p2 xs-text-2 titlebar"
      >
        <div class="item">
          <nuxt-link to="/" exact>
            Home
          </nuxt-link>
          <span v-show="crumb">
            &nbsp; &nbsp;
            <span class="text-gray-lightest">
              >
            </span>
            &nbsp;
            {{ thecrumb }}
          </span>
          &nbsp;
          <span class="text-gray-lightest">
            >
          </span>
          &nbsp;
          {{ blogtitle }}
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import VueFuse from "~/components/VueFuse"
export default {
  components: { VueFuse },
  props: ["blogtitle", "posts", "thecrumb"],
  data() {
    return {
      results: [],
      keys: [
        {
          name: "title",
          weight: 0.3
        },
        {
          name: "body",
          weight: 0.7
        }
      ],

      compResults: []
    }
  },
  computed: {
    allPosts() {
      let posts = this.$store.state.blogPosts
      let pages = this.$store.state.allPages
      let both = posts.concat(pages)
      return both
    },
    headerSiteName() {
      return this.$store.state.siteInfo.sitename
    },
    componentResults() {
      return this.$store.state.results
    },
    crumb() {
      return this.$store.state.theCrumb
    }
  },

  mounted() {
    this.$on("searchChanged", results => {
      this.compResults = results
    })
  },

  methods: {
    navHeight() {
      var height = document.getElementById("navbar").clientHeight
      console.log(height)
      this.$store.commit("SET_NAVHEIGHT", height - 1)
    }
  }
}
</script>
<style lang="scss">
.titlebar .item {
  overflow-x: none;
}
.results {
  padding-left: 0;
  transform: translateY(17px);
  width: 30vw;
}
.results li {
  list-style-type: none;
  margin-left: 0;
}
nav {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
}
.sitename {
  color: #000;
  font-family: arial, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2rem;

  .wf-active & {
    font-family: "Inter";
    font-weight: 900;
  }
}
@media only screen and (max-width: 40rem) {
  .results {
    width: 94vw;
  }
}
</style>
