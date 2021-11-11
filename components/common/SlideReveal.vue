<template lang="html">
	<div class="Slide-Reveal">
		<h5 class="sz-heading welcome bold">
			<span ref="welcomeText">Hi!</span>
		</h5>
	</div>
</template>

<script>
import Emitter from '~/assets/js/events'
import { mapActions, mapGetters } from 'vuex'

if (process.client) {
	var anime = require('animejs').default
}

export default {
	data: () => ({
		dev: true,
		welcomeAnime: null,
		welcomeFinished: false
	}),
	computed: {
		...mapGetters(['slideRevealed'])
	},
	methods: {
		...mapActions(['setSlideRevealed']),
		welcome() {
			this.welcomeAnime = anime({
				targets: this.$refs.welcomeText,
				duration: 900,
				easing: 'easeOutQuint',
				translateY: ['100%', '0%'],
				delay: 300,
				complete: () => {
					this.welcomeFinished = true
				}
			})
		},
		hide() {
			if (this.welcomeFinished) {
				this.hideAnimation()
			} else {
				this.welcomeAnime.finished.then(() => this.hide())
			}
		},
		hideAnimation() {
			anime
				.timeline()
				.add({
					targets: this.$refs.welcomeText,
					duration: 900,
					delay: 200,
					easing: 'easeInQuint',
					translateY: '100%'
				})
				.add({
					targets: this.$el,
					duration: 1200,
					easing: 'easeOutQuint',
					scale: '1, 0',
					update: anime => {
						if (this.slideRevealed) return
						if (anime.progress >= 90) {
							this.onSlideRevealed()
						}
					}
				})
		},
		onSlideRevealed() {
			this.setSlideRevealed(true)
			Emitter.emit('INIT_ANIMATIONS')
		}
	},
	mounted() {
		if (!this.dev) {
			this.welcome()
			Emitter.on('APP_READY', () => this.hide())
		} else {
			this.$el.style.display = 'none'
			Emitter.on('APP_READY', () => this.onSlideRevealed())
		}
	}
}
</script>
<style lang="scss" scoped>
.Slide-Reveal {
	align-items: center;
	background: var(--cl-black);
	bottom: 0;
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	position: fixed;
	transform-origin: top center;
	transition: transform 1200ms cubic-bezier(0.23, 1, 0.32, 1) 1200ms;
	will-change: transform;
	z-index: 999;

	.welcome {
		color: var(--cl-white);
		overflow: hidden;

		& > span {
			display: block;
			transform: translateY(100%);
		}
	}
}
</style>
