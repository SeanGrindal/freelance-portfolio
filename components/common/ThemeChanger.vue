<template lang="html">
  <div class="Theme-Changer"></div>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'

import Emitter from '~/assets/js/events'

export default {
  mixins: [ioMixin],
  data: () => ({
    ioOptions: {
      rootMargin: '0px',
      threshold: 0
    }
  }),
  methods: {
    reveal() {
      Emitter.emit('SET_THEME', 'light')
    },
    hide() {
      Emitter.emit('SET_THEME', 'dark')
    }
  },
  destroyed() {
    if (document.querySelector('[data-theme="dark"]')) {
      this.reveal()
    }
  }
}
</script>
</script>

<style lang="scss" scoped>
</style>
