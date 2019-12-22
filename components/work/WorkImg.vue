<template lang="html">
  <div class="Work-Img">
    <div class="background">
      <lazy-img class="img" :src="src" :alt="alt" draggable="false" />
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
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.Work-Img {
  width: 100%;

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
