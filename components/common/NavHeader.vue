<template>
	<header class="Nav-Header">
		<nuxt-link class="logo" to="/" @click.native="goTop">
			<!-- <span>S</span>
			<span class="bold logo-g">G</span> -->
			✌🏻✨
			<!-- 👋🏻  -->
			<!-- 👁️👅👁️ -->
			<!-- ☝🏻 -->
		</nuxt-link>
		<transition name="fade">
			<nav class="sz-small" v-show="isHome">
				<a href="/#landing">About</a>
				<!-- <a href="/#work">Work</a> -->
				<a href="/#exps">Sandbox</a>
				<a href="/#contact">Contact</a>
			</nav>
		</transition>
	</header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		links: null
	}),
	computed: {
		...mapGetters(['isMobile', 'currentWorkPageNum']),
		isHome() {
			if (this.$route.name == 'index' || this.$route.name == null) return true
			else return false
		}
	},
	methods: {
		scrollToSection(e) {
			e.preventDefault()
			const el = document.querySelector(e.target.getAttribute('href').replace(/\\|\//g, ''))

			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: el.getBoundingClientRect().top + window.scrollY
			})
		},
		goTop() {
			window.scroll({
				behavior: 'smooth',
				left: 0,
				top: 0
			})
		}
	},
	mounted() {
		this.links = document.querySelectorAll('a[href^="/#"]')

		this.links.forEach(anchor => {
			anchor.addEventListener('click', this.scrollToSection)
		})
	},
	beforeDestroy() {
		this.links.forEach(anchor => {
			anchor.removeEventListener('click', this.scrollToSection)
		})
	}
}
</script>

<style lang="scss" scoped>
.Nav-Header {
	position: fixed;
	margin: auto;
	left: 0;
	right: 0;
	max-width: $bk-max;
	padding: 0.25em 0;
	align-items: center;
	display: flex;
	justify-content: space-between;
	pointer-events: none;
	width: 100%;
	z-index: 100;

	@media (min-width: $bk-large) {
		padding: 0.5em;
	}

	@media (min-width: $bk-ultwd) {
		padding: 2.5em 0;
		max-width: $bk-ultwd;
	}

	nav {
		a:nth-child(3) {
			display: none;

			@media (min-width: 480px) {
				display: initial;
			}
		}
	}

	.logo {
		// font-size: 2.5rem;
		font-size: 2rem;
		letter-spacing: 0px;

		.logo-g {
			margin-left: -0.25em;
		}
	}

	a {
		// font-size: 2rem;
		display: inline-block;
		padding: 1.1rem 1rem;
		mix-blend-mode: exclusion;
		pointer-events: all;
	}

	a:not(.logo) {
		font-weight: 700;
	}

	.middle {
		@media (min-width: $bk-medium) {
			margin: 0 1em;
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 600ms ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
