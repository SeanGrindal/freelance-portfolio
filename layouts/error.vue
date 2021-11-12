<template>
	<div class="error-route">
		<div class="error">
			<h6 class="status-code bold">{{ error.statusCode }}</h6>
		</div>
	</div>
</template>

<script>
export default {
	props: ['error']
}
</script>

<style lang="scss" scoped>
.error-route {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	.error {
		text-align: center;
	}

	.status-code {
		font-size: 4rem;
	}
}
</style>
