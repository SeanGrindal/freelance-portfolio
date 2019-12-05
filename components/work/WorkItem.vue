<template lang="html">
  <nuxt-link class="Work-Item" :to="`/work/${page.id}`">
    <div class="img-wrapper" ref="imgWrapper">
      <img :src="page.card.src" :alt="page.pageName" draggable="false">
    </div>
    <p class="caption sz-small">
      <span class="bold index">0{{ number }}.</span>
      <span>{{ page.pageName }}</span>
    </p>
  </nuxt-link>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'
if (process.client) {
  var anime = require('animejs').default
}

export default {
  mixins: [ioMixin],
  props: {
    page: {
      type: Object,
      required: true
    },
    number: {
      required: true
    }
  },
  methods: {
    reveal() {
      anime.timeline({
        duration: 720,
        easing: 'easeOutSine',
      })
      .add({
        targets: this.$refs.imgWrapper,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      })
      .add({
        targets: this.$el,
        translateY: ['8vh', '0']
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.Work-Item {
  display: block;
  padding: 20px 0;
  transform: translateY(6vh);
  will-change: transform;

  &:hover img {
    transform: scale(1.1);
  }

  .img-wrapper {
    overflow: hidden;
    clip-path: polygon(0% 30%, 100% 30%, 100% 100%, 0% 100%);
  }

  img {
    display: block;
    transition: transform 540ms ease-out;
    width: 100%;
  }

  .caption {
    padding: 1em;

    @media(min-width: $bk-large) {
      padding: 0.75em 0;
    }

    .index {
      padding-right: .25em;
    }
  }
}
</style>
