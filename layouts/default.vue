<template>
	<div class="Default-Layout sz-regular">
		<nav-header />
		<main id="luxy" v-if="!isMobile">
			<nuxt />
		</main>
		<main v-else>
			<nuxt />
		</main>

		<custom-cursor ref="customCursor" v-if="!isMobile" />
		<div v-else></div>

		<slide-reveal />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Emitter from '~/assets/js/events'

import NavHeader from '~/components/common/NavHeader.vue'
import CustomCursor from '~/components/common/CustomCursor.vue'
import SlideReveal from '~/components/common/SlideReveal.vue'
import CopyFooter from '~/components/common/CopyFooter.vue'

if (process.client) {
	require('intersection-observer')
	var luxy = require('~/assets/js/luxy.js')
}

export default {
	components: {
		CustomCursor,
		SlideReveal,
		NavHeader,
		CopyFooter
	},
	data: () => ({
		themeTimeout: null
	}),
	computed: {
		...mapGetters(['isMobile']),
		...mapGetters(['currentWorkPageNum'])
	},
	methods: {
		...mapActions(['checkMobile']),
		setTheme(theme) {
			if (this.isMobile) return

			if (this.themeTimeout) {
				clearTimeout(this.themeTimeout)
				this.themeTimeout = null
			}

			document.documentElement.classList.add('theme-transition')
			this.themeTimeout = window.setTimeout(() => {
				document.documentElement.classList.remove('theme-transition')
			}, 1000)

			document.documentElement.setAttribute('data-theme', theme)
		},
		tick() {
			requestAnimationFrame(() => {
				if (!this.isMobile) {
					this.$refs.customCursor.tick()
				}

				this.tick()
			})
		}
	},
	beforeMount() {
		this.checkMobile()
	},
	mounted() {
		window.onbeforeunload = () => {
			if (!this.isMobile) {
				luxy.resetLuxy()
			}

			window.scrollTo(0, 0)
		}

		if (this.isMobile) {
			document.querySelector('html').classList.add('isMobile')
		}

		this._setTheme = this.setTheme
		Emitter.on('SET_THEME', this._setTheme)

		this.tick()

		Emitter.emit('APP_READY')

		console.log('%cDeveloped and designed by @SeanGrindal', 'font-weight: bold; color: #FF5050;')
		console.log(
			"%cI am currently looking for an software internship for summer '22 .",
			'font-weight: bold;'
		)
	},
	beforeDestroy() {
		Emitter.removeListener('SET_THEME', this._seTheme)
	}
}
</script>

<style lang="scss">
html {
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	overflow: scroll;
	overflow-x: hidden;
	min-width: $bk-min;

	&.theme-transition {
		transition: all 1000ms !important;
		transition-delay: 0 !important;
	}

	::selection {
		background: var(--cl-black);
		color: var(--cl-white);
	}

	::-moz-selection {
		background-color: var(--cl-black);
		color: var(--cl-white);
	}

	::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}

	main {
		background-color: var(--cl-white);
		transition: background-color 1000ms;
	}
}

.Default-Layout {
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	line-height: 1.2;
	overflow: hidden;
}

.page-enter-active,
.page-leave-active {
	transition: opacity 600ms ease-out;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}

.Page {
	z-index: 2;
}

#__nuxt,
#__layout {
	height: 100%;
}
</style>
