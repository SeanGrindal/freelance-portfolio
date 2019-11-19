<template lang="html">
  <div :class="['Cursor', type]" ref="custom-cursor">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Emitter from '~/assets/js/events'

if (process.client) {
  var anime = require('animejs').default
}
export default {
  data() {
    return {
      x: null,
      y: null,
      defaultDiameter: null,
      diameter: null,
      type: 'default'
    }
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    mouseMoveHandler(e) {
      if (this.isMobile) return

      this.x = e.clientX
      this.y = e.clientY
    },
    setMouseType(e) {
      if (this.isMobile) return

      this.type = e.type
      switch(this.type) {
        case 'default':
          this.setDiameter(this.defaultDiameter)
        break
        case 'enlarged':
          this.setDiameter(90)
        break
      }
    },
    getDefaultDiameter() {
      this.defaultDiameter = getComputedStyle(this.$el).getPropertyValue('--diameter').replace(/\D/g, '') || 0
      this.diameter = this.defaultDiameter
    },
    setDiameter(diameter) {
      this.diameter = diameter

      anime({
        targets: this.$el,
        height: diameter,
        width: diameter,
        duration: 720,
        easing: 'cubicBezier(0.23, 1, 0.32, 1)'
      })
    },
    tick() {
      if (this.isMobile) return

      this.$el.style.transform = `matrix(1, 0, 0, 1, ${this.x - this.diameter / 2}, ${this.y - this.diameter / 2})`
    }
  },
  mounted() {
    if (this.isMobile) return

    this.getDefaultDiameter()

    this._mouseMoveHandler = this.mouseMoveHandler.bind(this)
    this._setMouseType = this.setMouseType.bind(this)

    Emitter.on('SET_MOUSE_TYPE', this._setMouseType)
    window.addEventListener('mousemove', this._mouseMoveHandler)
  },
  beforeDestroy() {
    if (this.isMobile) return

    Emitter.removeListener('SET_MOUSE_TYPE', this._setMouseType)
    window.removeEventListener('mousemove', this._mouseMoveHandler)
  },
}
</script>

<style lang="scss" scoped>
.Cursor {
  --diameter: 60px;

  align-items: center;
  border: solid 1px $cl-black;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: none;
  justify-content: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: fixed;
  height: var(--diameter);
  transition: transform 360ms cubic-bezier(0.23, 1, 0.32, 1);
  width: var(--diameter);
  will-change: transform;
  z-index: 999;

  @supports (mix-blend-mode: exclusion) {
    border: solid 1px $cl-white;
    mix-blend-mode: exclusion;
  }
}
</style>
