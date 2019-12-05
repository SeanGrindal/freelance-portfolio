import Emitter from '~/assets/js/events'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      ioOptions: {
        rootMargin: '-20%',
        threshold: 0
      },
      io: null,
      intersected: false
    }
  },
  computed: {
    ...mapGetters(['slideRevealed'])
  },
  methods: {
    initIO() {
      if (this.io) return

      this.io = new IntersectionObserver(this.IOCb.bind(this), this.ioOptions)
      this.io.observe(this.$el)
    },
    IOCb(entries) {
      entries.forEach(entry => {
        if (!this.intersected) {
          if (this.hasOwnProperty('reveal') && entry.isIntersecting) {
            this.intersected = true
            this.reveal()
          }
        } else {
          if (this.hasOwnProperty('hide') && entry.rootBounds.y < entry.boundingClientRect.y && !entry.isIntersecting) {
            this.intersected = false
            this.hide()
          }
        }
      })
    }
  },
  mounted() {
    if (this.slideRevealed) {
      this.initIO()
    } else {
      Emitter.on('INIT_ANIMATIONS', () => this.initIO())
    }
  },
  beforeDestroy() {
    if (this.io) {
      this.io.unobserve(this.$el)
      this.io = null
    }
  }
}

// import Emitter from '~/assets/js/events'
// import { mapGetters } from 'vuex'
//
// export default {
//   data() {
//     return {
//       io: null,
//       toObserveEls: null,
//       observedEls: []
//     }
//   },
//   computed: {
//     ...mapGetters(['slideRevealed'])
//   },
//   methods: {
//     ioCb(entries) {
//       entries.forEach(({ target, isIntersecting }) => {
//         if (isIntersecting) {
//           target.reveal()
//         }
//       })
//     },
//     initIO() {
//       if (this.io) return
//
//       this.$nextTick(() => {
//         this.toObserveEls = document.querySelectorAll('.io-animate-in')
//         if (!this.toObserveEls) return
//
//         const options = {
//           rootMargin: '-20%',
//           threshold: 0
//         }
//
//         this.io = new IntersectionObserver(this.ioCb.bind(this), options)
//         this.toObserveEls.forEach(el => {
//           this.io.observe(el)
//           this.observedEls.push(el)
//         })
//       })
//     }
//   },
//   mounted() {
//     if (this.slideRevealed) {
//       this.initIO()
//     } else {
//       Emitter.on('INIT_ANIMATIONS', () => this.initIO())
//     }
//   },
//   beforeDestroy() {
//     this.observedEls.forEach(el => {
//       this.io.unobserve(el)
//       this.observedEls.shift()
//     })
//   }
// }

// import { mapGetters, mapActions } from 'vuex'
//
// export default {
//   computed: {
//     ...mapGetters(['IO', 'IOElements'])
//   },
//   methods: {
//     ...mapActions(['setIO'])
//     ioCb(entries) {
//       entries.forEach(({ target, isIntersecting }) => {
//         if (isIntersecting) {
//           const instance = this.IOElements.find({ $el } => target === $el)
//           if (instance.hasOwnProperty.reveal() {
//             instance.reveal()
//           })
//         }
//       })
//     },
//     initIO() {
//       if (this.IO) return
//
//       const options = {
//         rootMargin: '-20%',
//         threshold: 0
//       }
//
//       this.setIO(new IntersectionObserver(this.ioCb.bind(this), options))
//     }
//   },
//   mounted() {
//     this.initIO()
//   }
// }
//
