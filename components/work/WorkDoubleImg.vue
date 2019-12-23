<template lang="html">
  <div class="Work-Double-Img">
    <work-img
      :imgData="imgs[0]"
      :class="imgs[0].imgType"
    />
    <work-img
      :imgData="imgs[1]"
      :class="imgs[1].imgType"
    />
  </div>
</template>

<script>
import WorkImg from '~/components/work/WorkImg.vue'

export default {
  components: {
    WorkImg
  },
  props: {
    imgs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
