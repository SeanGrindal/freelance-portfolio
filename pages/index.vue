<template>
	<div class="Home">
		<landing />
		<theme-changer />
		<further-about />
		<section-header text="Projects" class="project-section-header" />
		<work-grid :projects="workProjs" />
		<section-header text="Experimemts" class="experiments-section-header" />
		<work-grid type="exps" :projects="experiments" />
		<contact-section />
	</div>
</template>

<script>
import Landing from '~/components/home/Landing.vue'
import ContactSection from '~/components/home/contactSection.vue'
import SectionHeader from '~/components/home/SectionHeader.vue'
import WorkGrid from '~/components/work/WorkGrid.vue'
import ThemeChanger from '~/components/common/ThemeChanger.vue'
import LuxyMixin from '~/assets/js/luxyMixin.js'
import cursorMixin from '~/assets/js/cursorMixin.js'

export default {
	mixins: [LuxyMixin, cursorMixin],
	components: {
		Landing,
		WorkGrid,
		SectionHeader,
		ContactSection,
		ThemeChanger
	},
	beforeMount() {
		window.scrollTo(0, 0)
	},
	computed: {
		workProjs() {
			return this.$store.state.workPages
		},
		experiments() {
			return this.$store.state.experiments
		}
	}
}
</script>

<style lang="scss" scoped>
.Theme-Changer {
	margin-top: 30vh;
}

.project-section-header {
	margin-top: 50vh;
	margin-bottom: 6vh;
}

.experiments-section-header {
	margin-top: 56vh;
	margin-bottom: 6vh;
}
</style>
