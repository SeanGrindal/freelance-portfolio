<template>
  <div class="Theme-Changer">
    <slot />
  </div>
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
      console.log("hi")
      Emitter.emit('SET_THEME', 'light')
    },
    hide() {
      Emitter.emit('SET_THEME', 'dark')
    }
  },
  destroyed() {
    // if (this.isMobile) return

    // if (document.querySelector('[data-theme="dark"]')) {
    //   this.reveal()
    // }
  }
}
</script>
</script>
