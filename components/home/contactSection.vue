<template lang="html">
  <section class="Contact-Section" id="contact">
    <div class="content">
      <a href="mailto:hello@seangrindal.dev" class="bold email-me">
        <line-reveal class="two-lines" :lines="['hello@', 'seangrindal.dev']" />
        <line-reveal class="one-line" :lines="['hello@seangrindal.dev']" />
      </a>
      <contact-reel />
    </div>
  </section>
</template>

<script>
import ContactReel from '~/components/common/ContactReel.vue'
import LineReveal from '~/components/common/LineReveal.vue'

export default {
  components: {
    ContactReel,
    LineReveal
  }
}
</script>

<style lang="scss" scoped>
.Contact-Section {
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  padding: 16vh 1rem;
  padding-bottom: 22vh;
  width: 100%;

  @media(min-width: $bk-medium) {
    padding: 0 1rem;
    min-height: 100vh;
    width: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(min-width: $bk-medium) {
      width: auto;
    }
  }

  p, .Contact-Reel {
    color: var(--cl-gray);
  }

  .Contact-Reel {
    width: 100%;
    max-width: none;

    @media(min-width: $bk-medium) {
      margin-left: auto;
      max-width: 450px;
    }
  }

  .email-me {
    display: inline-block;
    margin-top: 2rem;
    margin-bottom: 2.5rem;

    .one-line {
      font-size: 7.9vw;
      display: none;
    }

    .two-lines {
      font-size: 10.5vw;
    }

    @media(min-width: $bk-medium) {
      .two-lines {
        display: none;
      }

      .one-line {
        display: block;
      }
    }
  }
}
</style>
