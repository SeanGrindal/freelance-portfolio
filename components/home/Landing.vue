<template lang="html">
	<div class="Landing" id="landing">
		<section class="slide-in-text-wrapper">
			<!-- <slide-in-text> This summer I'm doing </slide-in-text> -->

			<!-- <slide-in-text> Launch House, an accelerator, </slide-in-text> -->

			<!-- <slide-in-text> working on communites, </slide-in-text> -->

			<!-- <slide-in-text> and building a DAO for </slide-in-text> -->

			<!-- <slide-in-text> founders and innovators ✌️</slide-in-text> -->

			<!-- <slide-in-text> My name's Sean Grindal. </slide-in-text>

			<slide-in-text> I'm a full-stack web developer </slide-in-text>

			<slide-in-text> living in Toronto, Ontario. </slide-in-text>

			<slide-in-text> I help start-ups, businesses, </slide-in-text>

			<slide-in-text> and agencies build cool things.</slide-in-text> -->

			<line-reveal
				class="large-lines"
				:lines="[
					`Hey there! My name's Sean ✌🏻`,
					`I'm a developer living in Toronto.`,
					`I co-founded and run Innoco, `,
					`and build with my fav startups`,
					'through my agency, Deco.'
				]"
			/>

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
		// if (!this.slideRevealed) {
		// 	this._setThemeDark = this.setThemeDark
		Emitter.once('INIT_ANIMATIONS', this.setThemeDark)
		setTimeout(() => {
			this.setThemeDark()
		})
		// }
	}
}
</script>

<style lang="scss" scoped>
.Landing {
	padding-top: 24vh;
	padding-right: 2vw;
	display: flex;
	justify-content: center;

	.large-lines.Line-Reveal {
		font-size: 5.5vw;
		// text-align: center;
		white-space: nowrap;
		padding: 1vh 0.75rem;
		font-weight: 700;

		@media (min-width: $bk-large) {
			font-size: 5vw;
		}

		@media (min-width: $bk-ultwd) {
			font-size: 140px;
		}

		::v-deep .line {
			padding: 1vh 0;
		}
	}

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
