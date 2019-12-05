<template lang="html">
  <section class="Work-Grid">
    <div class="Work-Grid__wrapper">
      <work-item
        v-for="(page, i) in workPages"
        :class="`Work-Item--${i + 1}`"
        :page="page"
        :number="i + 1"
        :key="i"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import WorkItem from '~/components/work/WorkItem.vue'
export default {
  components: {
    WorkItem
  },
  computed:{
    ...mapState(['workPages']),
  }
}
</script>

<style lang="scss" scoped>
.Work-Grid {
  max-width: $bk-max;
  margin: 0 auto;

  .Work-Item {
    width: 100%;

    &:not(:first-child) {
      margin-top: 10px;
    }

    @media(min-width: $bk-medium) {
      width: grid-percentage(5);
      margin-left: grid-percentage(0.5);

      &:nth-child(even) {
        margin-left: grid-percentage(1);
      }

      &:not(:first-child) {
        margin-top: 14vh;
      }

      &:nth-child(odd) {
        margin-top: 2vh;
      }
    }

    @media(min-width: $bk-max) {
      width: grid-percentage(5);
      margin-left: grid-percentage(0);

      &:nth-child(even) {
        margin-left: grid-percentage(2);
      }

      &:not(:first-child) {
        margin-top: 18vh;
      }

      &:nth-child(odd) {
        margin-top: 2vh;
      }
    }
  }
}

.Work-Grid__wrapper {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
}
</style>
