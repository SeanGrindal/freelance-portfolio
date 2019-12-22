<template lang="html">
  <div class="Work">
    <div class="Work__content">
      <work-intro
        :name="workPages[currentWorkPageNum].pageName"
        :description="workPages[currentWorkPageNum].pageContent.info"
        :link="workPages[currentWorkPageNum].pageContent.link"
      />

      <work-row
        v-for="(src, i) in workPages[currentWorkPageNum].pageContent.imgsOne"
        :key="`${i}-imgsOne`"
      >
        <work-img :src="src" />
      </work-row>

      <work-row v-if="workPages[currentWorkPageNum].pageContent.showcaseOne">
        <info-showcase
          number="1"
          :info="workPages[currentWorkPageNum].pageContent.showcaseOne"
        >
          <work-img :src="workPages[currentWorkPageNum].pageContent.showcaseOne.src" />
        </info-showcase />
      </work-row>

      <work-row
        v-if="workPages[currentWorkPageNum].pageContent.imgsTwo"
        v-for="(src, i) in workPages[currentWorkPageNum].pageContent.imgsTwo"
        :key="`${i}-imgsTwo`"
      >
        <work-img :src="src" />
      </work-row>


      <work-row v-if="workPages[currentWorkPageNum].pageContent.showcaseTwo">
        <info-showcase
          class="reverse"
          number="2"
          :info="workPages[currentWorkPageNum].pageContent.showcaseTwo"
        >
          <work-img :src="workPages[currentWorkPageNum].pageContent.showcaseTwo.src" />
        </info-showcase />
      </work-row>

      <work-row>
        <work-details
          :details="workPages[currentWorkPageNum].details"
        />
      </work-row>
    </div>

    <next-footer :nextProject="workPages[nextWorkPageNum]" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import LuxyMixin from '~/assets/js/LuxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

import WorkIntro from '~/components/work/WorkIntro.vue'
import WorkRow from '~/components/work/WorkRow.vue'
import WorkImg from '~/components/work/WorkImg.vue'
import InfoShowcase from '~/components/work/InfoShowcase.vue'
import WorkDetails from '~/components/work/WorkDetails.vue'
import NextFooter from '~/components/work/NextFooter.vue'

export default {
  mixins: [LuxyMixin, cursorMixin],
  components: {
    WorkIntro,
    WorkImg,
    NextFooter,
    InfoShowcase,
    WorkRow,
    WorkDetails
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
  mounted() {

  }
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
