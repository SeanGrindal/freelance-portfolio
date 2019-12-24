<template lang="html">
  <div class="Work">
    <div class="Work__content">
      <work-intro
        :name="workPages[currentWorkPageNum].pageName"
        :description="workPages[currentWorkPageNum].pageContent.info"
        :link="workPages[currentWorkPageNum].pageContent.link"
      />

      <work-row
        v-for="(row, i) in workPages[currentWorkPageNum].pageContent.rows"
        :key="`${i}`"
      >
        <work-img
          v-if="row.type == 'img'"
          :imgData="row.imgData"
          :class="row.imgData.imgType"
        />

        <work-double-img
          v-else-if="row.type == 'doubleImg'"
          :imgs="row.imgs"
        />

        <work-info
          v-else-if="row.type == 'info'"
          :class="row.direction"
          :text="row.text"
          :heading="row.heading"
        >
          <work-img
            :imgData="row.img"
            :class="row.img.imgType"
          />
        </work-info>

      </work-row>

      <work-row>
        <work-details :details="workPages[currentWorkPageNum].details"/>
      </work-row>
    </div>

    <next-footer :nextProject="workPages[nextWorkPageNum]" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import LuxyMixin from '~/assets/js/luxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

import WorkIntro from '~/components/work/WorkIntro.vue'
import WorkRow from '~/components/work/WorkRow.vue'
import WorkImg from '~/components/work/WorkImg.vue'
import WorkDoubleImg from '~/components/work/WorkDoubleImg.vue'
import WorkInfo from '~/components/work/WorkInfo.vue'
import WorkDetails from '~/components/work/WorkDetails.vue'
import NextFooter from '~/components/work/NextFooter.vue'

export default {
  mixins: [LuxyMixin, cursorMixin],
  components: {
    WorkIntro,
    WorkImg,
    WorkDoubleImg,
    WorkInfo,
    WorkRow,
    WorkDetails,
    NextFooter
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
  computed: {
    ...mapState(['workPages']),
    ...mapGetters(['currentWorkPageNum', 'nextWorkPageNum'])
  },
  beforeMount() {
    window.scrollTo(0, 0)
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
