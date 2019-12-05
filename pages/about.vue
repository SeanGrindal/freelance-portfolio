<template>
  <div class="About">
    <landing />
  </div>
</template>

<script>
import LuxyMixin from '~/assets/js/LuxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

import Landing from '~/components/intro/Landing.vue'

export default {
  mixins: [LuxyMixin, cursorMixin],
  components: {
    Landing
  },
  head () {
    return {
      title: 'Sean Grindal | About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Sean Grindal is a freelance web developer who loves minimal esctectics and functional user interfaces."
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.About {
  min-height: 100vh;
  padding-bottom: 30vh;
}
</style>
