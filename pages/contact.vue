<template>
  <div class="Contact">
  </div>
</template>

<script>

import LuxyMixin from '~/assets/js/LuxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

export default {
  mixins: [LuxyMixin, cursorMixin],
  head () {
    return {
      title: 'Sean Grindal | Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Sean Grindal's contact information. Email, LinkedIn, Medium, Twitter"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.Contact {
  min-height: 100vh;
}
</style>
