<template>
	<section class="further-about-info">
		<line-reveal class="reveal--subheading bold" :lines="['More About Me']" />
		<text-block>
			After having taught myself how to program, I began contracting as a frontend web developer for
			a <a href="https://motiv.digital/" target="_blank">web agency</a> shortly after starting high
			school. I was granted the opportunity to work closely with senior developers and designers on
			various websites and web applications. Working in a professional environment at such a young
			age was exhilerating and provided invaluable experience and opportunties.
		</text-block>
		<text-block>
			To gain further professional experience, I took a gap year before university to work for
			<a href="https://anoa.ca/" target="_blank">another agency</a>
			focused on creating portfolio sites for the film industry. During the year I led the planning
			and development of new internal architectures and tools used in the development of all their
			contemporary client projects.
		</text-block>
		<text-block>
			I'm currently taking computer science at the University of Toronto and looking for internship
			opportunities for summer '22. I still love to experiment with cool new technology by working
			on smaller side projects. Keep scrolling if you want to see some! If you want more details,
			here is my formal <a href="/resume.pdf" target="_blank">resume</a>. If you have a position,
			<a href="/#contact">contact me!</a> :D
		</text-block>

		<contact-reel speed="slow" />
	</section>
</template>

<script>
import LineReveal from '../common/LineReveal.vue'
export default {
	components: { LineReveal }
}
</script>

<style lang="scss" scoped>
.further-about-info {
	max-width: $bk-max;
	margin: 0 auto;
	padding: 0 1.5rem;

	@media (min-width: $bk-large) {
		padding: 0 1rem;
		padding-left: grid-percentage(1);
	}

	@media (min-width: $bk-ultwd) {
		max-width: $bk-ultwd;
	}

	.Contact-Reel {
		max-width: none;
		width: 100%;
		opacity: 0.5;
		font-size: 1.25rem;
		margin-top: 5rem;
		max-width: 40em;
	}

	p {
		max-width: 40em;
		line-height: 2;
		font-size: 1rem;
		margin-top: 2.5em;

		@media (min-width: $bk-medium) {
			font-size: 1.25rem;
		}
	}

	a {
		font-weight: 500;
		text-decoration: underline;

		&:hover {
			opacity: 0.7;
		}
	}
}
</style>
