<template lang="html">
  <div class="section-header bold">
    <div class="luxy-el" :data-speed-y="speedY">
      <div class="slider">
        <span
          class="heading"
          v-for="n in 8"
          :key="n"
        >
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import LuxyElFix from '~/assets/'

export default {
  // mixin: [LuxyElFix],
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      speedY: 15
    }
  },
  methods: {
    getComputedTranslateXY(obj) {
      if(!window.getComputedStyle) return
    	const transArr = []
      const style = getComputedStyle(obj), transform = style.transform || style.webkitTransform || style.mozTransform

      let mat = transform.match(/^matrix3d\((.+)\)$/)
      if (mat) return parseFloat(mat[1].split(', ')[13])
      mat = transform.match(/^matrix\((.+)\)$/)
      mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0
      mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0
      return transArr
    },
    setOffset() {
      const translateY = this.getComputedTranslateXY(this.$el)[1] || 0
      const top = this.$el.getBoundingClientRect().top + window.scrollY - translateY
      this.$el.style.transform = `translateY(${-top * (this.speedY / 50)}px)`
      this.$el.style.marginTop = `${top * (this.speedY / 50)}px`
    },
    resizeHandler() {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(() => {
        this.setOffset()
      }, 64)
    }
  },
  mounted() {
    this.setOffset()

    this._resizeHandler = this.resizeHandler.bind(this)
    window.addEventListener('resize', this._resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._resizeHandler)
  }
}
</script>

<style lang="scss" scoped>
.section-header {
  color: var(--cl-gray);
  opacity: 0.25;
  display: inline-flex;
  pointer-events: none;
  font-size: 22vw;
  will-change: transform;

  @media(min-width: $bk-large) {
    font-size: 12vw;
  }
}

.luxy-el, .slider {
  display: inline-flex;
}

.slider {
  animation: horizontal-scroll 20s linear infinite;
}

.heading {
  display: inline-table;
  pointer-events: all;
  padding-left: 0.75em;
  line-height: 1;
}

@keyframes horizontal-scroll {
  from {
    transform: translateX(-75%);
  }

  to {
    transform: translateX(-25%);
  }
}
</style>
