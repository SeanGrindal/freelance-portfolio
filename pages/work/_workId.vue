<template lang="html">
  <div class="Work">
    <div class="Work__content">

      {{ this.workPages[this.currentWorkPageNum].pageName }}

      <work-row>
        <work-img src="/images/creative-landing/creative-landing.jpg" />
      </work-row>

      <work-row>
        <work-img src="/images/creative-landing/creative-brand.jpg" />
      </work-row>

      <work-row>
        <feature-showcase
          number="1"
          :textLines="['I developed playful', 'animations and interactions', 'that bring the site to life.']"
        >
          <work-img :src="this.workPages[this.currentWorkPageNum].card.src" />
        </feature-showcase />
      </work-row>

      <work-row>
        <work-img src="/images/creative-landing/creative-brand.jpg" />
      </work-row>

      <work-row>
        <feature-showcase
          class="reverse"
          number="2"
          :textLines="['I developed playful', 'animations and interactions', 'that bring the site to life.']"
        >
          <work-img :src="this.workPages[this.currentWorkPageNum].card.src" />
        </feature-showcase />
      </work-row>
    </div>
    <next-footer :nextProject="this.workPages[this.nextWorkPageNum]" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import LuxyMixin from '~/assets/js/LuxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

import ThemeChanger from '~/components/common/ThemeChanger.vue'
import WorkRow from '~/components/work/WorkRow.vue'
import WorkImg from '~/components/work/WorkImg.vue'
import FeatureShowcase from '~/components/work/FeatureShowcase.vue'
import NextFooter from '~/components/work/NextFooter.vue'

export default {
  mixins: [LuxyMixin, cursorMixin],
  components: {
    ThemeChanger,
    WorkImg,
    NextFooter,
    FeatureShowcase,
    WorkRow
  },
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
    ...mapGetters(['currentWorkPageNum', 'nextWorkPageNum'])
  },
}
</script>

<style lang="scss">
.Work {
  min-height: 100vh;
}

.Work__content {
  padding-top: 20vh;
}
</style>
