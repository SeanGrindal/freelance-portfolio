<template lang="html">
  <footer class="Copy-Footer sz-small">
    <div class="content">
      <span class="medium">&copy;2019 Sean Grindal</span>
      <!-- <contact-reel /> -->
    </div>
  </footer>
</template>

<script>
import ContactReel from '~/components/common/ContactReel.vue'

export default {
  components: {
    ContactReel
  }
}
</script>

<style lang="scss" scoped>
.Copy-Footer {
  margin: 0 auto;
  max-width: $bk-max;
  margin-top: 2vw;

  .content {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 1rem;

    span {
      flex: 1 0 auto;
      white-space: nowrap;
      padding-right: 4em;
    }

    .contact-reel {
      flex: 0 0 auto;
    }
  }
}
</style>
