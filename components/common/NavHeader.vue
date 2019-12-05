<template lang="html">
  <header class="Nav-Header">
    <nuxt-link class="logo" to="/">
      <span>S</span>
      <span class="bold logo-g">G</span>
    </nuxt-link>
    <nav class="sz-small">
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/work">Work</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.Nav-Header {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  max-width: $bk-max;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 100;

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
  }

  a:not(.logo) {
    font-weight: 500;
  }

  .middle {
    @media(min-width: $bk-medium) {
      margin: 0 1em;
    }
  }
}
</style>
