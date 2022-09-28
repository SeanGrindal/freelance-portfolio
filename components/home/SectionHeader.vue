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
		setOffset() {
			if (this.isMobile) return

			let offsetTop = this.$el.getBoundingClientRect().top - window.innerHeight / 2
			this.aniFrame = requestAnimationFrame(() => {
				this.$refs['slider'].style.transform = `translateY(${Math.round(offsetTop * -0.2)}px)`

				this.setOffset()
			})
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

		this.aniFrame = requestAnimationFrame(() => {
			this.setOffset()

			this.$el.classList.add('show')
		})
	},
	beforeDestroy() {
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
	font-size: 18vw;
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
	animation: horizontal-scroll 75s linear infinite;

	@media (min-width: $bk-large) {
		animation: horizontal-scroll 150s linear infinite;
	}
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
