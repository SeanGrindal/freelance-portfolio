<template lang="html">
	<div :class="['Cursor', type]" ref="custom-cursor">
		<div class="cursor-inner" ref="cursor-inner">
			<transition>
				<div class="text" v-if="text">{{ text }}</div>
			</transition>
		</div>
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
			text: null,
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
			switch (this.type) {
				case 'default':
					this.setDiameter(this.defaultDiameter, 0)
					this.text = null
					break
				case 'enlarged':
					this.setDiameter(80)
					this.text = null
					break
				case 'visit':
					this.setDiameter(80)
					this.text = 'visit'
					break
			}
		},
		getDefaultDiameter() {
			if (this.isMobile) return

			this.defaultDiameter =
				getComputedStyle(this.$refs['cursor-inner'])
					.getPropertyValue('--diameter')
					.replace(/\D/g, '') || 0
			this.diameter = this.defaultDiameter
		},
		setDiameter(diameter, opacity = 1) {
			if (this.isMobile) return

			this.diameter = diameter

			anime({
				targets: this.$refs['cursor-inner'],
				height: diameter,
				width: diameter,
				opacity,
				duration: 720,
				easing: 'cubicBezier(0.23, 1, 0.32, 1)'
			})
		},
		tick() {
			if (this.isMobile) return

			this.$el.style.transform = `matrix(1, 0, 0, 1, ${this.x}, ${this.y})`
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
	}
}
</script>

<style lang="scss" scoped>
.Cursor {
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	position: fixed;
	pointer-events: none;
	height: 0;
	transition: transform 360ms cubic-bezier(0.23, 1, 0.32, 1);
	width: 0;
	will-change: transform;
	z-index: 999;

	.cursor-inner {
		--diameter: 48px;

		align-items: center;
		border: solid 1px var(--cl-red);
		opacity: 0;
		border-radius: 50%;
		box-sizing: border-box;
		position: absolute;
		transform: translate(-50%, -50%);
		justify-content: center;
		height: var(--diameter);
		width: var(--diameter);
	}
}
</style>
