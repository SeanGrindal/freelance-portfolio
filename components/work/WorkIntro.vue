<template lang="html">
  <div class="Work-Intro">
    <a
      :href="link"
      target="_blank"
      @mouseover="titleHovered = true"
      @mouseleave="titleHovered = false"
    >
      <line-reveal class="reveal--heading medium" :lines="lines" />
    </a>
    <text-block class="description">
      {{ description }}
      <br />
      <a
        :class="['page-link sz-small bold', { '--underline': titleHovered }]"
        :href="link"
        target="_blank"
      >
        Visit Site
      </a>
    </text-block>
  </div>
</template>

<script>
import LineReveal from '~/components/common/LineReveal'
import TextBlock from '~/components/common/TextBlock'

export default {
  components: {
    LineReveal,
    TextBlock
  },
  props: {
    link: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    }
  },
  data: () => ({
    titleHovered: false
  }),
  computed: {
    lines() {
      return this.name.split(/\s+/)
    }
  }
}
</script>

<style lang="scss" scoped>
.Work-Intro {
  max-width: $bk-max;
  margin: 0 auto;
  margin-bottom: 10vh;
  padding: 0 1rem;

  @media(min-width: $bk-large) {
    justify-content: space-between;
    display: flex;
  }

  .description {
    padding-top: 4em;
    max-width: $bk-small;

    @media(min-width: $bk-large) {
      padding-top: 2em;
    }

    .page-link {
      color: var(--cl-gray);
      display: inline-block;
      margin-top: 1em;
      margin-left: -1em;
      padding: 1em;

      &:after {
        content: '';
        background-color: var(--cl-gray);
        width: 0;
        transition: width 240ms ease-in;
        position: absolute;
        bottom: 1em;
        left: 1em;
        height: 1px;
      }

      &.--underline:after, &:hover:after {
        width: calc(100% - 2em);
        transition: width 240ms ease-out;
      }
    }
  }
}
</style>
