<template>
  <BaelGrid :allitems="postByCat" />
</template>

<script>
import BaelGrid from "~/components/BaelGrid"
export default {
  components: { BaelGrid },
  computed: {
    postByCat() {
      return this.$store.state.blogPosts.filter(obj => {
        return obj.category == this.title
      })
    }
  },
  async asyncData({ params, store }) {
    let post = await import(`~/content/categories/posts/${params.slug}.json`)
    await store.commit("SET_TITLE", post.title)
    await store.commit("SET_CRUMB", "Categories")
    return post.default
  },
  head() {
    return {
      title: `${this.title} | ${this.$store.state.siteInfo.sitename}`
    }
  },
  transition(to, from) {
    if (!from) return "slide-right"
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left"
  },
  methods: {
    theSlug() {
      return this.$route.params.slug
    }
  }
}
</script>

<style>
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
</style>
