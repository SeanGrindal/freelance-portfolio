<template lang="html">
  <nuxt-link class="Work-Item" :to="`/work/${page.id}`">
    <div class="img-wrapper" ref="imgWrapper">
      <work-img
        :isLazy="false"
        :imgData="{
          src: page.card.src,
          alt: page.pageName
        }"
        :class="page.card.imgType"
      />
    </div>
    <p class="caption sz-small">
      <span class="bold index">0{{ number }}.</span>
      <span>{{ page.pageName }}</span>
    </p>
  </nuxt-link>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'
import WorkImg from '~/components/work/WorkImg.vue'
import { mapGetters } from 'vuex'

if (process.client) {
  var anime = require('animejs').default
}

export default {
  mixins: [ioMixin],
  components: {
    WorkImg
  },
  props: {
    page: {
      type: Object,
      required: true
    },
    number: {
      required: true
    }
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    reveal() {
      if (this.isMobile) return

      const timeline = anime.timeline({
        easing: 'easeOutSine',
      })

      timeline.add({
        duration: 1280,
        targets: this.$refs.imgWrapper,
        clipPath: 'polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%)',
      })

      timeline.add({
        duration: 920,
        targets: this.$el,
        translateY: ['6vh', '0']
      }, 0)

      this.unobserveIO()
    }
  }
}
</script>

<style lang="scss">
.Work-Item {
  display: block;
  padding: 20px 0;

  .img-wrapper {
    box-shadow: 3px 3px 16px 4px rgba(#000, 0.1);
  }

  img {
    display: block;
    width: 100%;
  }

  .caption {
    margin-top: 0.25em;
    margin-bottom: 0.75em;
    padding: 1em;

    @media(min-width: $bk-large) {
      padding: 0.75em 0;
    }

    .index {
      padding-right: .25em;
    }
  }
}

html:not(.isMobile) {
  .Work-Item {
    transform: translateY(6vh);
    will-change: transform;

    .img-wrapper {
      overflow: hidden;
      -webkit-clip-path: polygon(0% 30%, 110% 30%, 110% 110%, 0% 110%);
      clip-path: polygon(0% 30%, 110% 30%, 110% 110%, 0% 110%);
      will-change: clip-path;
    }

    img {
      border-radius: 1px;
      transition: transform 720ms cubic-bezier(0.215, 0.61, 0.355, 1);

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
