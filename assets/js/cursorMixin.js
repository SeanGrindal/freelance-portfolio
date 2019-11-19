import Emitter from '~/assets/js/events'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      links: null
    }
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    linkEnterHandler() {
      if (this.isMobile) return

      Emitter.emit('SET_MOUSE_TYPE', { type: 'enlarged' })
    },
    linkLeaveHandler() {
      if (this.isMobile) return

      Emitter.emit('SET_MOUSE_TYPE', { type: 'default' })
    }
  },
  mounted() {
    if (this.isMobile) return

    this._linkEnterHandler = this.linkEnterHandler.bind(this)
    this._linkLeaveHandler = this.linkLeaveHandler.bind(this)

    this.links = document.querySelectorAll('a')
    this.links.forEach(link => {
      link.addEventListener('mouseenter', this._linkEnterHandler)
      link.addEventListener('mouseleave', this._linkLeaveHandler)
    })
  },
  beforeDestroy() {
    if (this.isMobile) return

    Emitter.emit('SET_MOUSE_TYPE', { type: 'default' })

    this.links.forEach(link => {
      link.removeEventListener('hover', this._linkEnterHandler)
      link.removeEventListener('mouseleave', this._linkLeaveHandler)
    })
  },
}
