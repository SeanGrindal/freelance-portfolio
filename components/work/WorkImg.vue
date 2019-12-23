<template lang="html">
  <div class="Work-Img">
    <div class="background">
      <lazy-img
        v-if="isLazy"
        class="img"
        :src="imgData.src"
        :alt="imgData.alt"
        draggable="false"
      />
      <img
        v-else
        class="img"
        :src="imgData.src"
        :alt="imgData.alt"
        draggable="false"
      />
    </div>
  </div>
</template>

<script>
import LazyImg from '~/components/common/LazyImg.vue'

export default {
  components: {
    LazyImg
  },
  props: {
    imgData: {
      required: true,
    },
    isLazy: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.Work-Img {
  width: 100%;

  &.mobile .background {
    padding: 12% 24%;
  }

  &.tablet .background {
    padding: 12% 18%;
  }

  .background {
    background-color: var(--cl-light-gray);
    padding: 10% 12%;
  }

  img {
    display: block;
    box-sizing: content-box;
    box-shadow: 4px 4px 20px 8px rgba(black, 0.1);
    width: 100%;
  }
}
</style>
