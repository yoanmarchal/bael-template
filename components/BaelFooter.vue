<template>
  <footer class="fill-gray-lighter xs-text-2 md-text-2 xs-border-top">
    <div class="r no-gap">
      <div v-if="pagination" class="c-12 xs-text-left xs-p2 xs-border-right xs-border-bottom">
        <div class="item xs-text-center">
          <div
            class="xs-flex xs-flex-justify-space-between xs-flex-align-center"
          >
            <div>
              <nuxt-link
                v-if="prevpage > 0"
                class="bold button button--secondary button--small"
                :to="`?page=${prevpage}`"
              >
                Previous
              </nuxt-link>
              <nuxt-link
                v-if="queryParam < totalpages"
                class="bold button button--secondary button--small"
                :to="`?page=${nextpage}`"
              >
                Next
              </nuxt-link>
            </div>
            <div>
              <span class="text-gray-lightest">
                Page {{ queryParam }} / {{ totalpages }} -
                {{ this.$store.state.resultsnum }} Results &nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="xs-text-left xs-p2  xs-border-right" :class="signupAboutSize">
        <div class="item">
          <div v-show="siteDescription" class="footer__heading xs-mb2">
            About
          </div>
          <p v-show="siteDescription">
            {{ siteDescription }}
          </p>
        </div>
      </div>
      <div v-if="signupBoolean" class="c-25 xs-text-left xs-p2 xs-border-right xs-border-top sm-border-top-none sm-border-right">
        <div v-if="!sent" class="item">
          <div class="footer__heading xs-mb2">
            Newsletter Signup
          </div>
          <form
            action="/.netlify/functions/app"
            name="mailinglist"
            @submit.prevent="processForm"
          >
            <input
              v-model="emaildata.email"
              type="email"
              class="text-input text-input--small xs-mb1 xs-mr2"
              placeholder="you@email.com"
            >
            <button
              type="submit"
              class="button button--transparent button--small"
            >
              Submit
            </button>
          </form>
        </div>
        <div v-else class="item">
          <div class="xs-mb2">
            {{ emaildata.email }} has been added to our newsletter.
          </div>
        </div>
      </div>
      <div class="xs-text-left xs-p2 xs-border-right xs-border-top sm-border-top-none" :class="signupAboutSize">
        <div class="item">
          <div v-show="connectData" class="footer__heading xs-mb2">
            Connect
          </div>
          <ul class="list-unstyled">
            <li v-for="(c, i) in connectData" v-show="connectData" :key="i">
              <a :href="c.url">
                {{ c.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="xs-text-left xs-p2 xs-border-right xs-border-top sm-border-top-none" :class="signupAboutSize">
        <div class="item">
          <div class="footer__heading xs-mb2">
            Deploy
          </div>

          <a
            href="https://app.netlify.com/start/deploy?repository=https://github.com/jake-101/bael-template"
          >
            <img
              style="height:29px;width:auto;"
              src="~/assets/deploy.svg"
              title="Deploy to Netlify"
            >
          </a>
        </div>
      </div>
      <div class="c-12 xs-text-left xs-p2 xs-border-top xs-border-right">
        <div class="item xs-text-2">
          An open source design by
          <a href="https://jake101.com">
            jake101
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: ["pagination"],
  data() {
    return {
      emaildata: { email: "" },
      sent: false
    }
  },
  computed: {
    signupAboutSize() {
      return {
        "c-25": this.signupBoolean,
        "c-4": !this.signupBoolean
      }
    },
    prevpage() {
      var prev = Number(this.queryParam) - 1
      return prev
    },
    totalpages() {
      var res = this.$store.state.resultsnum
      var total = Math.ceil(res / 12)
      return total
    },
    nextpage() {
      var next = Number(this.queryParam) + 1
      return next
    },
    queryParam() {
      if (this.$route.query.page == null) {
        return 1
      } else {
        return Number(this.$route.query.page)
      }
    },
    connectData() {
      return this.$store.state.connect.connectlinks
    },
    siteDescription() {
      return this.$store.state.siteInfo.sitedescription
    },
    signupBoolean() {
      return this.$store.state.siteInfo.emailsignup
    }
  },
  methods: {
    async processForm() {
      try {
        const sendgrid = await this.$axios.post(
          "/.netlify/functions/app",
          this.emaildata
        )
        console.log("Processed!")
        this.sent = true
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped>
.text-input {
  max-width: 100%;
}
.footer__heading {
  max-width: 100%;
}
</style>
