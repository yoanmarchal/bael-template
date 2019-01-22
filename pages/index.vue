<template>
  <BaelGrid :allitems="allBlogPosts" />
</template>

<script>
import BaelGrid from "~/components/BaelGrid"
export default {
  watchQuery: ["page"],
  transition(to, from) {
    if (!from) return "fade"
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left"
  },
  name: "Index",
  components: { BaelGrid },
  data() {
    return {}
  },
  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts
    }
  },
  methods: {}
}
</script>

<style>
.browse a {
  width: 100%;
}
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
