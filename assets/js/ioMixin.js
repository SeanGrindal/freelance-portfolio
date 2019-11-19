export default {
  data() {
    return {
      toObserveEls: null,
      observedEls: []
    }
  },
  methods: {
    ioCb(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('intersected')
          target.classList.add('in-view')
        } else {
          target.classList.remove('in-view')
        }
      })
    }
  },
  beforeDestroy() {
    this.observedEls.forEach(el => {
      this.io.unobserve(el)
      this.observedEls.shift()
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.toObserveEls = document.querySelectorAll('.io-animate-in')
      if (!this.toObserveEls.length) return

      const options = {
        rootMargin: '-20%',
        threshold: 0
      }

      this.io = new IntersectionObserver(this.ioCb.bind(this), options)
      this.toObserveEls.forEach(el => {
        this.io.observe(el)
        this.observedEls.push(el)
      })
    })
  }
}
