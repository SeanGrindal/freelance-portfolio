<template lang="html">
  <section class="Contact-Section">
    <div class="content">
      <p>I would love to work with you. Send me an inquiry!</p>
      <a href="mailto:hello@seangrindal.dev" class="bold email-me">
        <div>hello@</div>
        <div>seangrindal.dev</div>
      </a>
      <contact-reel />
    </div>
  </section>
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
.Contact-Section {
  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 90vh;
  margin: 0 auto;
  margin-top: 16vh;
  max-width: $bk-max;
  padding: 0 1rem;

  .content {
    display: flex;
    flex-direction: column;
  }

  p, .Contact-Reel {
    color: var(--cl-gray);
  }

  .Contact-Reel {
    @media(min-width: $bk-medium) {
      margin-left: auto;
    }
  }

  .email-me {
    display: inline-block;
    font-size: 10vw;
    margin-top: 2rem;
    margin-bottom: 2.5rem;

    @media(min-width: $bk-medium) {
      display: flex;
      font-size: 6vw;
    }
  }
}
</style>
