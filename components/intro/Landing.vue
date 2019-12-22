<template lang="html">
  <section class="Landing" id="landing">
    <slide-in-text side="right">
      Hi! My name's Sean Grindal.
    </slide-in-text>

    <slide-in-text>
      I am a freelance web developer
    </slide-in-text>

    <slide-in-text side="right">
      working from Canada Alberta.
    </slide-in-text >

    <slide-in-text>
      I help start-ups, businesses,
    </slide-in-text>

    <slide-in-text side="right">
      and digital agencies build
    </slide-in-text>

    <slide-in-text>
      their unique digital products.
    </slide-in-text>


    <!-- <h1 class="landing-heading">
      <line-reveal
        class="medium reveal--heading"
        :lines="[
          `I'm a freelance`,
          'web developer',
          'based in Canada.',
        ]"
      />
    </h1> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import LineReveal from '~/components/common/LineReveal.vue'
import ThemeChanger from '~/components/common/ThemeChanger.vue'
import SlideInText from '~/components/about/SlideInText'

import Emitter from '~/assets/js/events'

export default {
  components: {
    LineReveal,
    SlideInText,
    ThemeChanger
  },
  computed: {
    ...mapGetters(['slideRevealed'])
  },
  methods: {
    setThemeDark() {
      Emitter.emit('SET_THEME', 'dark')
    }
  },
  mounted() {
    if (!this.slideRevealed) {
      this._setThemeDark = this.setThemeDark
      Emitter.once('INIT_ANIMATIONS', this._setThemeDark)
    } else {
      this.setThemeDark()
    }
  },
  destroyed() {
    if (document.querySelector('[data-theme="dark"]')) {
      Emitter.emit('SET_THEME', 'light')
    }
  }
}
</script>

<style lang="scss" scoped>
.Landing {
  padding-top: 30vh;
  min-height: 100vh;
}
</style>
