<template lang="html">
<div class="Work-Details">
  <div class="column">
    <h6 class="column--heading medium cl-gray">Technologies</h6>
    <div class="column--item sz-small" v-for="item in details.technology">
      {{ item }}
    </div>
  </div>
  <div class="column">
    <h6 class="column--heading medium cl-gray">Details</h6>
    <div class="column--item sz-small" v-for="item in details.misc">
      {{ item }}
    </div>
  </div>
  <div class="column">
    <h6 class="column--heading medium cl-gray">Project Type</h6>
    <div class="column--item sz-small" v-for="item in details.projectType">
      {{ item }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    details: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Work-Details {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 18vh auto;
  max-width: $bk-max;
  padding: 12vh 1rem;
  padding-bottom: 4vh;
  width: 100%;

  &:before {
    content: '';
    top: 0;
    position: absolute;
    background: var(--cl-gray);
    opacity: 0.5;
    width: calc(100% - 2rem);
    height: 1px;
    left: 1rem;
  }

  .column {
    padding: 2rem 0;
    width: 100%;

    @media(min-width: $bk-small) {
      & + .column {
        padding-left: 1rem;
      }

      width: 33.3333%;
    }

    @media(min-width: $bk-large) {
      & + .column {
        padding-left: 8rem;
      }

      width: auto;
    }
  }

  .column--heading {
    margin-bottom: 1.75em;
  }

  .column--item + .column--item {
    padding-top: 1.25em;
  }
}
</style>
