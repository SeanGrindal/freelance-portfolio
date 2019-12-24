<template lang="html">
<div class="Next-Footer">
  <nuxt-link class="next-link medium" :to="`/work/${nextProject.id}`">
    <line-reveal class="sz-heading" :lines="['Next Project']" />
  </nuxt-link>
  <img :src="nextProject.card.src" alt="Next project display image.">
</div>
</template>

<script>
import LineReveal from '~/components/common/LineReveal.vue'

export default {
  components: {
    LineReveal
  },
  props: {
    nextProject: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Next-Footer {
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: var(--cl-black);
  padding: 0 1rem;
  height: 70vh;
  width: 100%;
  overflow: hidden;
}

.next-link {
  color: var(--cl-white);
  z-index: 2;
}

img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: blur(5px);
}

html.isMobile {
  .Next-Footer .next-link {
    mix-blend-mode: exclusion;
  }
}

html:not(.isMobile) {
  img {
    opacity: 0;
    transition: opacity 360ms ease-out;
  }

  .next-link:hover ~ img {
    opacity: 1;
    transition: opacity 360ms cubic-bezier(0.55, 0.055, 0.675, 0.28);
  }
}

.isMobile {
  .Next-Footer {
    background: none;
  }
}
</style>
