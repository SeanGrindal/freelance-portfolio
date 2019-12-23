<template lang="html">
<div class="Work-Info">
  <div class="content">
    <div class="text-wrapper">

      <template v-if="type == 'lines'">
        <line-reveal
          class="description cl-gray medium reveal--subheading"
          :lines="text"
        />
      </template>

      <template v-else-if="type == 'text'">
        <line-reveal
          class="cl-gray info-heading medium reveal--subheading"
          :lines="[heading]"
        />
        <text-block class="info">
          {{ text }}
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
    heading: {
      type: String
    },
    text: {
      required: true
    }
  },
  computed: {
    type() {
      if (Array.isArray(this.text)) return 'lines'
      else return 'text'
    }
  }
}
</script>

<style lang="scss">
.Work-Info {
  width: 100%;

  @media(min-width: $bk-large) {
    .content {
      .text-wrapper {
        padding-right: 2.5rem;

        @media(min-width: $bk-max) {
          padding-right: 3vh;
        }
      }


      .feature-wrapper {
        @media(min-width: $bk-max) {
          padding-left: 3vh;
        }
      }
    }
  }

  @media(min-width: $bk-large) {
    &.reverse .content {
      flex-direction: row-reverse;

      .text-wrapper {
        padding-left: 2.5rem;
        padding-right: 0;

        @media(min-width: $bk-max) {
          padding-left: 4vh;
          padding-right: 0;
        }
      }


      .feature-wrapper {
        @media(min-width: $bk-max) {
          padding-right: 3vh;
          padding-left: 0;
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
      }
    }
  }

  .number, .info-heading {
    margin-bottom: 0.75em;
  }

  .description, .info {
    margin-bottom: 1.25em;
  }

  .info {
    max-width: 600px;
  }

  .description {
    .line {
      padding: .175em 0;
    }
  }
}
</style>
