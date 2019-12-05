<template lang="html">
  <div class="WorkRow">
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
  data: () => ({
    ioOptions: {
      rootMargin: '-8%',
      threshold: 0
    },
  }),
  methods: {
    reveal() {
      anime({
        targets: this.$el,
        duration: 1280,
        easing: 'easeOutQuint',
        translateY: ['6rem', '0rem'],
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.WorkRow {
  max-width: $bk-max;
  margin: 6vh auto;
  padding: 0 1em;
  transform: translateY(6rem);
}
</style>
