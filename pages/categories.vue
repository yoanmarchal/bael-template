<template>
  <BaelGrid :allitems="allCategories" />
</template>

<script>
import BaelGrid from "~/components/BaelGrid"
import { mapGetters, mapActions } from "vuex"

export default {
  watchQuery: ["page"],
  components: { BaelGrid },
  data() {
    return {}
  },
  async asyncData({ store }) {
    await store.commit("SET_TITLE", "Categories")
  },
  transition(to, from) {
    if (!from) return "fade"
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left"
  },
  head() {
    return {
      title: "Categories | " + this.$store.state.siteInfo.sitename
    }
  },
  computed: {
    ...mapGetters({
      allCategories: "category/getallcats"
    })
  },
  async fetch({ store }) {
    return store.dispatch("category/getCats")
  }
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
