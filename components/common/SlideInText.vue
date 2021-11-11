<template lang="html">
	<div :class="['Slide-In-Text bold', side]">
		<slot />
	</div>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'
if (process.client) {
	var anime = require('animejs').default
}

export default {
	mixins: [ioMixin],
	props: {
		side: {
			type: String,
			default: 'left',
			validator: value => ['left', 'right'].indexOf(value) != -1
		}
	},
	data: () => ({
		ioOptions: {
			rootMargin: '40%',
			threshold: 0
		}
	}),
	methods: {
		reveal() {
			this.$el.style.visibility = 'visible'

			if (this.side === 'left') {
				anime({
					targets: this.$el,
					duration: 1400,
					easing: 'easeOutQuint',
					delay: 100,
					translateX: ['-100vw', '0vw'],
					rotate: [0, -0.5]
				})
			} else {
				anime({
					targets: this.$el,
					duration: 1400,
					easing: 'easeOutQuint',
					delay: 100,
					translateX: ['100vw', '0vw'],
					rotate: [0, -0.5]
				})
			}

			this.unobserveIO()
		}
	}
}
</script>

<style lang="scss" scoped>
.Slide-In-Text {
	display: inline-block;
	font-size: 5.5vw;
	white-space: nowrap;
	visibility: hidden;
	padding: 1.5vh 0.75rem;
	will-change: transform;

	@media (min-width: $bk-large) {
		font-size: 5vw;
	}

	@media (min-width: $bk-ultwd) {
		font-size: 140px;
	}
}
</style>
