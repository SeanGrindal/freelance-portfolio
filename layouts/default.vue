<template>
  <div class="Default-Layout sz-regular">
    <nav-header />
    <main id="luxy" v-if="!isMobile">
      <nuxt />
    </main>
    <nuxt v-else/>

    <custom-cursor ref="customCursor" v-if="!isMobile"/>
    <reveal />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavHeader from '~/components/common/NavHeader.vue'
import CustomCursor from '~/components/common/CustomCursor.vue'
import Reveal from '~/components/common/Reveal.vue'

if (process.client) {
  require('intersection-observer')
  var anime = require('animejs')
}

export default {
  components: {
    CustomCursor,
    Reveal,
    NavHeader
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    ...mapActions(['checkMobile']),
    tick() {
      requestAnimationFrame(() => {
        if (!this.isMobile) {
          this.$refs.customCursor.tick()
        }

        this.tick()
      })
    }
  },
  beforeMount() {
    this.checkMobile()
  },
  mounted() {
    this.tick()

    console.log('%c @SeanGrindal', "font-weight: bold;")
  }
}
</script>

</script lang="scss">

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: scroll;
  overflow-x: hidden;
  min-width: $bk-min;
}

::selection {
  background: $cl-black;
  color: $cl-white;
}

::-moz-selection {
  background: $cl-black;
  color: $cl-white;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.Default-Layout {
  font-family:'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.2;
  overflow: hidden;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

#__nuxt, #__layout {
  height: 100%;
}

#luxy {
  background: $cl-white;
}
</style>
