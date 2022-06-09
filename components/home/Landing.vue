<template lang="html">
	<div class="Landing" id="landing">
		<section class="slide-in-text-wrapper">
			<slide-in-text> This summer I'm doing </slide-in-text>

			<slide-in-text> Launch House, Y-Combinator, </slide-in-text>

			<!-- <slide-in-text> working on communites, </slide-in-text> -->

			<slide-in-text> and building a DAO for </slide-in-text>

			<slide-in-text> founders and innovators ✌️</slide-in-text>

			<!-- <slide-in-text side="right"> My name's Sean Grindal. </slide-in-text>

			<slide-in-text> I'm a full-stack web developer </slide-in-text>

			<slide-in-text side="right"> living in Toronto, Ontario. </slide-in-text>

			<slide-in-text> I help start-ups, businesses, </slide-in-text>

			<slide-in-text side="right"> and digital agencies build </slide-in-text>

			<slide-in-text> their unique digital products. </slide-in-text> -->

			<!-- <h1 class="landing-heading">
				<line-reveal
				class="medium reveal--heading"
				:lines="[
					`I'm a freelance`,
					'web developer',
					'based in Canada.',
				]"
				/>
			</h1> -->
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineReveal from '~/components/common/LineReveal.vue'
import ThemeChanger from '~/components/common/ThemeChanger.vue'
import SlideInText from '~/components/common/SlideInText'

import Emitter from '~/assets/js/events'

export default {
	components: {
		LineReveal,
		SlideInText,
		ThemeChanger
	},
	computed: {
		...mapGetters(['slideRevealed'])
	},
	methods: {
		setThemeDark() {
			Emitter.emit('SET_THEME', 'dark')
		}
	},
	mounted() {
		if (!this.slideRevealed) {
			this._setThemeDark = this.setThemeDark
			Emitter.once('INIT_ANIMATIONS', this._setThemeDark)
		} else {
			this.setThemeDark()
		}
	},
	destroyed() {
		if (document.querySelector('[data-theme="dark"]')) {
			Emitter.emit('SET_THEME', 'light')
		}
	}
}
</script>

<style lang="scss" scoped>
.Landing {
	padding-top: 30vh;

	.slide-in-text-wrapper {
		max-width: $bk-max;
		margin: 0 auto;
		padding: 0 1rem;

		@media (min-width: $bk-ultwd) {
			max-width: $bk-ultwd;
		}
	}
}
</style>
