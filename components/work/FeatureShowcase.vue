<template lang="html">
<div class="Feature-Showcase">
  <div class="content">
    <div class="text-wrapper">
      <line-reveal
        class="cl-gray sz-small number"
        :lines="[`0${number}.`]"
      />
      <line-reveal
        class="description cl-gray number medium reveal--subheading"
        :lines="textLines"
      />
    </div>
    <div class="feature-wrapper">
      <slot />
    </div>
  </div>
</div>
</template>

<script>
import LineReveal from '~/components/common/LineReveal.vue'

export default {
  components: {
    LineReveal
  },
  props: {
    number: {
      required: true
    },
    textLines: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.Feature-Showcase {
  width: 100%;

  @media(min-width: $bk-large) {
    &.reverse .content {
      flex-direction: row-reverse;

      .text-wrapper {
        padding-left: 5rem;
      }
    }
  }

  .content {
    @media(min-width: $bk-large) {
      display: flex;

      .feature-wrapper, .text-wrapper {
        flex: 0 0 50%;
      }

      .text-wrapper {
        justify-content: center;
        flex-direction: column;
        display: flex;
        padding-right: 5rem;
      }
    }
  }

  .number {
    margin-bottom: 2em;
  }

  .description {
    .line {
      padding: .175em 0;
    }
  }
}
</style>
