import { mapGetters } from 'vuex'
if (process.client) {
  var luxy = require('luxy.js')
}

export default {
  computed: {
    ...mapGetters(['isMobile'])
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.isMobile) luxy.init({ wrapperSpeed: 0.08 })
    })
  }
}
