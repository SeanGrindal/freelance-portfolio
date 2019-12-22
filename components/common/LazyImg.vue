<template lang="html">
  <img :class="['Lazy-Img', { 'loaded': isLoaded }]" draggable="false" />
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'

export default {
  mixins: [ioMixin],
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data: () => ({
    ioOptions: {
      rootMargin: '60%',
      threshold: 0
    },
    isLoaded: false
  }),
  methods: {
    onLoad() {
      this.isLoaded = true
      this.$el.removeEventListener('load', this.onLoad)
    },
    reveal() {
      this.$el.addEventListener('load', this.onLoad)
      this.$el.setAttribute('src', this.src)
    }
  }
}
</script>

<style lang="scss">
.Lazy-Img {
  opacity: 0;
  transition: opacity 240ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &.loaded {
    opacity: 1;
  }
}
</style>
