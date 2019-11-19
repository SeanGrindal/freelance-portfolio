<template lang="html">
  <div class="Work">
    {{ this.workPages[this.currentWorkPageNum].pageName }}
  </div>
</template>

<script>
import cursorMixin from '~/assets/js/cursorMixin.js'
import { mapGetters, mapState } from 'vuex'

export default {
  mixins: [cursorMixin],
  head () {
    return {
      title: `Sean Grindal | ${this.workPages[this.currentWorkPageNum].pageName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Explore Sean Grindal's projects. ${this.workPages[this.currentWorkPageNum].description}.`
        }
      ]
    }
  },
  computed:{
    ...mapState(['workPages']),
    ...mapGetters(['currentWorkPageNum'])
  },
}
</script>

<style lang="scss">
.Work {
  min-height: 100vh;
}
</style>
