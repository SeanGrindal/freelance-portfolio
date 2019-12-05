<template>
  <div class="Home">
    <landing />
    <theme-changer />
    <section-header text="Work" />
    <work-grid />
    <contact-section />
  </div>
</template>

<script>
import Landing from '~/components/intro/Landing.vue'
import SectionHeader from '~/components/common/SectionHeader.vue'
import WorkGrid from '~/components/work/WorkGrid.vue'
import ContactSection from '~/components/contact/contactSection.vue'
import ThemeChanger from '~/components/common/ThemeChanger.vue'

import LuxyMixin from '~/assets/js/LuxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

export default {
  mixins: [LuxyMixin, cursorMixin],
  components: {
    Landing,
    WorkGrid,
    SectionHeader,
    ContactSection,
    ThemeChanger
  }
}
</script>

<style lang="scss" scoped>
.Theme-Changer {
  margin-top: 30vh;
}
</style>
