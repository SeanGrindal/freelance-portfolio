<template lang="html">
  <div :class="['Slide-In-Text medium', side]">
    <slot />
  </div>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'
if (process.client) {
  var anime = require('animejs').default
}

export default {
  mixins: [ioMixin],
  props: {
    side: {
      type: String,
      default: 'left',
      validator: value => ['left', 'right'].indexOf(value) != -1
    }
  },
  methods: {
    reveal() {
      this.$el.style.visibility = 'visible'

      if (this.side === 'left') {
        anime({
          targets: this.$el,
          duration: 1800,
          easing: 'easeOutQuint',
          delay: 100,
          translateX: ['-100vw', '0vw'],
          rotate: [0, -1]
        })
      } else {
        anime({
          targets: this.$el,
          duration: 1800,
          easing: 'easeOutQuint',
          delay: 100,
          translateX: ['100vw', '0vw'],
          rotate: [0, -1]
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Slide-In-Text {
  font-size: 5.5vw;
  white-space: nowrap;
  visibility: hidden;
  padding: 1.5vh 1rem;

  @media(min-width: $bk-large) {
    font-size: 6vw;
    padding: 1.5vh 2rem;
  }
}
</style>
