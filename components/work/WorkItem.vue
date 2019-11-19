<template lang="html">
<nuxt-link class="Work-Item io-animate-in" :to="`/work/${page.id}`">
  <div class="img-wrapper">
    <img :src="page.card.src" :alt="page.pageName" draggable="false">
  </div>
  <p class="caption sz-small">{{ page.pageName }}</p>
</nuxt-link>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Work-Item {
  $translate: 6vh;

  display: block;
  padding: 20px 0;
  transition: transform 720ms ease-out;
  transform: translateY($translate);
  will-change: transform;

  &:hover img {
    transform: scale(1.1);
  }

  .img-wrapper {
    overflow: hidden;
    transition: clip-path 720ms ease-out;
    clip-path: polygon(0% 30%, 100% 30%, 100% 100%, 0% 100%);
    transform: matrix(1, 0, 0, 1, 0, 0);
    will-change: clip-path;
  }

  img {
    display: block;
    transition: transform 540ms ease-out;
    width: 100%;
  }

  .caption {
    padding: 1em;

    @media(min-width: $bk-large) {
      padding: 0.75em 0;
    }
  }
}

// Animation
.Work-Item.intersected {
  transform: translateY(0);

  .img-wrapper {
    clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);
  }
}
</style>
