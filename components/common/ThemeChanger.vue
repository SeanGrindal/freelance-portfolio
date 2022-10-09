<template>
	<div class="Theme-Changer">
		<slot />
	</div>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'

import Emitter from '~/assets/js/events'
import { mapGetters } from 'vuex'

export default {
	mixins: [ioMixin],
	data: () => ({
		ioOptions: {
			rootMargin: '0px',
			threshold: 0
		}
	}),
	computed: {
		...mapGetters(['isMobile'])
	},
	methods: {
		reveal() {
			Emitter.emit('SET_THEME', 'light')
		},
		hide() {
			Emitter.emit('SET_THEME', 'dark')
		}
	},
	mounted() {
		if (this.isMobile) {
			setTimeout(() => {
				this.reveal()
			}, 0)
		}
	}
}
</script>
