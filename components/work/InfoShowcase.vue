<template lang="html">
<div class="Feature-Showcase">
  <div class="content">
    <div class="text-wrapper">
      <!-- <line-reveal
        class="cl-gray sz-small number"
        :lines="[`0${number}.`]"
      /> -->
      <template v-if="info.type == 'lines'">
        <line-reveal
          class="description cl-gray medium reveal--subheading"
          :lines="info.textLines"
        />
      </template>
      <template v-else-if="info.type == 'text'">
        <line-reveal
          class="cl-gray info-heading medium reveal--subheading"
          :lines="[info.heading]"
        />
        <text-block class="info">
          {{ info.text }}
        </text-block>
      </template>
    </div>
    <div class="feature-wrapper">
      <slot />
    </div>
  </div>
</div>
</template>

<script>
import TextBlock from '~/components/common/TextBlock.vue'
import LineReveal from '~/components/common/LineReveal.vue'

export default {
  components: {
    TextBlock,
    LineReveal
  },
  props: {
    info: {
      required: true
    },
    number: {
      type: [Number, String],
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
        padding-left: 2.5rem;

        @media(min-width: $bk-max) {
          padding-left: 5rem;
        }
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
        padding-right: 2.5rem;

        @media(min-width: $bk-max) {
          padding-right: 5rem;
        }
      }
    }
  }

  .number, .info-heading {
    margin-bottom: 0.75em;
  }

  .description, .info {
    margin-bottom: 1.25em;
  }

  .description {
    .line {
      padding: .175em 0;
    }
  }
}
</style>
