<template lang="html">
  <div class="Work-Img">
    <div class="background">
      <img class="img" :src="src" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
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
