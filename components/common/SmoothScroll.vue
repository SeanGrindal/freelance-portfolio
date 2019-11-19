<template lang="html">
  <div class="scroll">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      windowY: null
    }
  },
  methods: {
    setScroll(offset) {
      this.$el.style.transform = `translate3d(0px, ${-offset}px, 0px)`
    },
    setBodyHeight() {
      document.body.style.height = `${this.$el.clientHeight}px`
    },
    scrollHandler() {
      this.windowY = window.scrollY
    },
    resizeHandler() {
      this.setBodyHeight()
    },
    tick() {
      this.setScroll(this.windowY)
    }
  },
  mounted() {
    this.resizeHandler()
    this._scrollHandler = this.scrollHandler.bind(this)
    this._resizeHandler = this.resizeHandler.bind(this)

    window.addEventListener('scroll', this._scrollHandler)
    window.addEventListener('resize', this._resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this._scrollHandler)
    window.removeEventListener('resize', this._resizeHandler)
  }
}
</script>

<style lang="scss" scoped>
.scroll {
  transition: transform 900ms cubic-bezier(0.23, 1, 0.32, 1);
  position: fixed;
  will-change: transform;
}
</style>
