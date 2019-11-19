<template>
  <div class="Home">
    <section-header text="Work" />
    <work-grid />
  </div>
</template>

<script>
import SectionHeader from '~/components/common/SectionHeader.vue'
import WorkGrid from '~/components/work/WorkGrid.vue'
import LuxyMixin from '~/assets/js/LuxyMixin.js'
import ioMixin from '~/assets/js/ioMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

export default {
  scrollToTop: true,
  mixins: [LuxyMixin, ioMixin, cursorMixin],
  components: {
    WorkGrid,
    SectionHeader
  },
}
</script>

<style lang="scss" scoped>
.Home {
  height: 100%;
  // padding-top: 180vh;
}

.section-header {
  margin-top: 60vh;
}
</style>
