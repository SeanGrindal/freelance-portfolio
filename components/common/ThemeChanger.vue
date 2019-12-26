<template lang="html">
  <div class="Theme-Changer"></div>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'

import Emitter from '~/assets/js/events'
import { mapGetters } from 'vuex'

export default {
  mixins: [ioMixin],
  data: () => ({
    ioOptions: {
      rootMargin: '0px',
      threshold: 0
    }
  }),
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    reveal() {
      if (this.isMobile) return

      Emitter.emit('SET_THEME', 'light')
    },
    hide() {
      if (this.isMobile) return

      Emitter.emit('SET_THEME', 'dark')
    }
  },
  destroyed() {
    if (this.isMobile) return

    if (document.querySelector('[data-theme="dark"]')) {
      this.reveal()
    }
  }
}
</script>
</script>
