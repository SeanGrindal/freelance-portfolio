<template>
	<section class="Contact-Section" id="contact">
		<div class="content">
			<a href="mailto:sean@grindal.me" class="bold email-me">
				<line-reveal class="one-line" :lines="['sean@grindal.me']" />
			</a>

			<contact-reel />
		</div>
	</section>
</template>

<script>
import ContactReel from '~/components/common/ContactReel.vue'
import LineReveal from '~/components/common/LineReveal.vue'

export default {
	components: {
		ContactReel,
		LineReveal
	}
}
</script>

<style lang="scss" scoped>
.Contact-Section {
	align-items: center;
	justify-content: center;
	display: flex;
	margin: 0 auto;
	padding: 16vh 1rem;
	padding-bottom: 22vh;
	width: 100%;

	@media (min-width: $bk-medium) {
		padding: 0 1rem;
		min-height: 100vh;
		width: auto;
	}

	.say-hi {
		font-weight: 500;
	}

	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding-bottom: 3rem;
		width: 100%;

		@media (min-width: $bk-medium) {
			width: auto;
		}
	}

	p,
	.Contact-Reel {
		color: var(--cl-gray);
	}

	.Contact-Reel {
		width: calc(100% - 16px);
		margin: 0 auto;
		right: 0;
		left: 0;
		position: absolute;
		bottom: 0;
	}

	.email-me {
		display: inline-block;
		margin-top: 2rem;
		margin-bottom: 2.5rem;

		.one-line {
			font-size: 9.6vw;
			text-align: center;

			@media (min-width: $bk-large) {
				font-size: min(8.8vw, 200px);
			}
		}
	}
}
</style>
