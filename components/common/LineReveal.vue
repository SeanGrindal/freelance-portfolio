<template lang="html">
  <div class="Line-Reveal io-animate-in">
    <div
      :class="['line', `line-${i}`]"
      v-for="(text, i) in lines"
      :key="i"
    >
      <span ref="lineText">{{ text }}</span>
    </div>
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
    lines: {
      type: Array,
      required: true
    }
  },
  methods: {
    reveal() {
      if (this.lines.length > 1) {
        anime({
          targets: this.$refs.lineText,
          duration: 1200,
          easing: 'easeOutQuint',
          translateY: ['100%', '0%'],
          delay: anime.stagger(200, {easing: 'linear'})
        })
      } else {
        anime({
          targets: this.$refs.lineText,
          duration: 1200,
          easing: 'easeOutQuint',
          translateY: ['100%', '0%'],
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Line-Reveal {
  font-size: inherit;

  &.reveal--subheading {
    font-size: 4.5vw;

    @media(min-width: $bk-medium) {
      font-size: 4vw;
    }

    @media(min-width: $bk-large) {
      font-size: 3vw;
    }

    @media(min-width: $bk-max) {
      font-size: 2.5rem;
    }
  }

  &.reveal--heading {
    font-size: 9vw;

    @media(min-width: $bk-medium) {
      font-size: 8vw;
    }

    @media(min-width: $bk-large) {
      font-size: 6vw;
    }

    @media(min-width: $bk-max) {
      font-size: 5.5rem;
    }
  }

  .line {
    line-height: 1.45;
    overflow: hidden;
  }

  .line span {
    display: inline-block;
    transform: translateY(100%);
  }
}
</style>
