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

<style lang="scss">
.Work-Double-Img {
  .Work-Img:first-child {
    padding-bottom: 6vh;
  }

  @media(min-width: $bk-large) {
    align-items: stretch;
    display: flex;

    .Work-Img:first-child {
      padding-right: 3vh;
      padding-bottom: 0;
      width: 50%;
    }

    .Work-Img:last-child {
      padding-left: 3vh;
      width: 50%;
    }

    .background {
      height: 100%;
    }
  }
}
</style>
