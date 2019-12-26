<template lang="html">
  <header class="Nav-Header">
    <nuxt-link class="logo" to="/">
      <span>S</span>
      <span class="bold logo-g">G</span>
    </nuxt-link>
    <nav class="sz-small" v-if="isHome">
      <a href="/#landing">About</a>
      <a href="/#work">Work</a>
      <a href="/#contact">Contact</a>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    links: null
  }),
  computed: {
    ...mapGetters(['isMobile', 'currentWorkPageNum']),
    isHome() {
      if (this.currentWorkPageNum == -1) return true
      else return false
    }
  },
  methods: {
    scrollToSection(e) {
      e.preventDefault()
      const el = document.querySelector(e.target.getAttribute('href').replace(/\\|\//g, ''))

      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: el.getBoundingClientRect().top + window.scrollY
      })
    }
  },
  mounted() {
    this.links = document.querySelectorAll('a[href^="/#"]')

    this.links.forEach(anchor => {
      anchor.addEventListener('click', this.scrollToSection)
    })
  },
  beforeDestroy() {
    this.links.forEach(anchor => {
      anchor.removeEventListener('click', this.scrollToSection)
    })
  }
}
</script>

<style lang="scss" scoped>
.Nav-Header {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  max-width: $bk-max;
  padding: .25em 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  width: 100%;
  z-index: 100;

  @media(min-width: $bk-large) {
    padding: 1em 0;
  }

  @media(min-width: $bk-ultwd) {
    padding: 4em 0;
    max-width: $bk-ultwd;
  }

  .logo {
    font-size: 1.75rem;
    letter-spacing: 0px;

    .logo-g {
      margin-left: -.25em;
    }
  }

  a {
    display: inline-block;
    padding: 1.1rem 1rem;
    mix-blend-mode: exclusion;
    pointer-events: all;
  }

  a:not(.logo) {
    font-weight: 700;
  }

  .middle {
    @media(min-width: $bk-medium) {
      margin: 0 1em;
    }
  }
}
</style>
