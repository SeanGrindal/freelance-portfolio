import { mapGetters } from 'vuex'
if (process.client) {
  var luxy = require('luxy.js')
}

export default {
  scrollToTop: false,
  computed: {
    ...mapGetters(['isMobile'])
  },
  mounted() {
    if (this.isMobile) return

    this.$nextTick(() => {

      window.scrollTo(0, 0)
      luxy.init({ wrapperSpeed: 0.08 })
    })
  },
  beforeDestroy() {
    if (this.isMobile) return

    luxy.resetLuxy()
  }
}
