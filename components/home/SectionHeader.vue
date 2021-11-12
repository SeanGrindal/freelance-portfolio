<template lang="html">
	<div class="section-header bold">
		<!-- <div class="luxy-el" :data-speed-y="speedY"> -->
		<div class="slider-wrapper" ref="slider">
			<div class="slider">
				<span class="heading" v-for="n in 8" :key="n">
					{{ text }}
				</span>
			</div>
		</div>
		<!-- </div> -->
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	props: {
		text: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			speedY: 15,
			aniFrame: null
		}
	},
	computed: {
		...mapGetters(['isMobile'])
	},
	methods: {
		getComputedTranslateXY(obj) {
			if (this.isMobile) return

			if (!window.getComputedStyle) return
			const transArr = []
			const style = getComputedStyle(obj),
				transform = style.transform || style.webkitTransform || style.mozTransform

			let mat = transform.match(/^matrix3d\((.+)\)$/)
			if (mat) return parseFloat(mat[1].split(', ')[13])
			mat = transform.match(/^matrix\((.+)\)$/)
			mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0
			mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0
			return transArr
		},
		setOffset() {
			if (this.isMobile) return

			let offsetTop = this.$el.getBoundingClientRect().top - window.innerHeight / 2
			// const translateY = this.getComputedTranslateXY(this.$el)[1] || 0
			// const top = this.$el.getBoundingClientRect().top + window.scrollY - translateY
			this.aniFrame = requestAnimationFrame(() => {
				this.$refs['slider'].style.transform = `translateY(${Math.round(offsetTop * -0.3)}px)`

				this.setOffset()
			})
			// this.$el.style.marginTop = `${top * (this.speedY / 50)}px`
		},
		resizeHandler() {
			if (this.isMobile) return

			clearTimeout(this.resizeTimeout)
			this.resizeTimeout = setTimeout(() => {
				this.setOffset()
			}, 64)
		}
	},
	mounted() {
		if (this.isMobile) return

		this.setOffset()

		// this._resizeHandler = this.resizeHandler.bind(this)
		// window.addEventListener('resize', this._resizeHandler)

		// window.addEventListener('scroll', this.setOffset)

		this.aniFrame = requestAnimationFrame(() => {
			this.setOffset
		})

		// setTimeout(() => {
		// 	this.resizeHandler()
		this.$el.classList.add('show')
		// }, 100)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this._resizeHandler)
		// window.removeEventListener('scroll', this.setOffset)

		cancelAnimationFrame(this.aniFrame)
	}
}
</script>

<style lang="scss" scoped>
.section-header {
	color: var(--cl-gray);
	display: inline-flex;
	pointer-events: none;
	opacity: 0.25;
	font-size: 22vw;
	padding-bottom: 0.25em;
	will-change: transform;

	@media (min-width: $bk-large) {
		padding-bottom: 0;
		font-size: 12vw;
	}

	@media (min-width: $bk-ultwd) {
		font-size: 10vw;
	}
}

.luxy-el,
.slider {
	display: inline-flex;
}

.slider {
	animation: horizontal-scroll 20s linear infinite;
}

.slider-wrapper {
	will-change: transform;
}

.heading {
	display: inline-table;
	pointer-events: all;
	padding-left: 0.75em;
	line-height: 1;
}

html:not(.isMobile) {
	.section-header {
		opacity: 0;
		transition: opacity 240ms ease-out;

		&.show {
			opacity: 0.25;
		}
	}
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
