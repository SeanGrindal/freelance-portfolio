<template lang="html">
	<div class="Contact-Reel">
		<div :class="['Contact-Reel__contacts', `speed--${speed}`]">
			<template v-for="n in 4">
				<a href="mailto:hello@seangrindal.dev" target="_blank">Email</a>
				<!-- <a href="https://twitter.com/GrindalSean" target="_blank">Twitter</a> -->
				<a href="https://github.com/SeanGrindal" target="_blank">Github</a>
				<a href="https://www.linkedin.com/in/sean-grindal-b26b0918b/" target="_blank">LinkedIn</a>
				<a href="https://medium.com/@sean37gl" target="_blank">Medium</a>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		speed: {
			type: String,
			default: 'fast'
		}
	}
}
</script>

<style lang="scss" scoped>
.Contact-Reel {
	overflow: hidden;
	font-weight: 500;
	max-width: 360px;
	width: 100%;

	.Contact-Reel__contacts {
		display: inline-flex;
		will-change: transform;

		&.speed--fast {
			animation: horizontal-scroll 12s linear infinite;
		}

		&.speed--slow {
			animation: horizontal-scroll 40s linear infinite;
		}

		&:hover {
			animation-play-state: paused;
		}

		a {
			display: inline-table;
			margin: 0 0.75em;
			padding: 0.5em;

			&:after {
				content: '';
				background: var(--cl-black);
				height: 1px;
				transition: width 360ms ease-in;
				position: absolute;
				bottom: 2px;
				left: 0.5em;
				width: 0;
			}

			&:hover:after {
				width: calc(100% - 1em);
				transition: width 240ms ease-out;
			}
		}
	}
}

@keyframes horizontal-scroll {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-50%);
	}
}
</style>
