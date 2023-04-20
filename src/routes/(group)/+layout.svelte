<script>
	import Menu from '$lib/Menu.svelte';
</script>

<div class="bg-img" />
<div class="content bg-light">
	<div class="row">
		<div class="col-12 text-center">
			<h1 class="display-1">"OpenWater cze" je jméno?</h1>
		</div>
		<div class="col-12 d-md-none p-5">
			<Menu />
		</div>
		<div class="col-12 col-md-9 p-5">
			<slot />
		</div>
		<div class="d-none d-md-block col-md-3 contacts-wrapper mt-5">
			<Menu />
		</div>
	</div>
</div>

<style lang="scss">
	@keyframes backgroundChange {
		0% {
			background-image: url('/images/0.jpg');
		}
		33% {
			background-image: url('/images/1.jpg');
		}
		66% {
			background-image: url('/images/2.jpg');
		}
	}

	.bg-img {
		background-image: url('/images/0.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: fixed;
		height: 100vh;
		width: 100vw;
		animation: backgroundChange 10s ease-in-out 0s infinite normal none;
	}

	.content {
		position: relative;
		top: 100vh;
		min-height: 100vh;
	}

	.contacts-wrapper {
		min-height: 100vh;
	}
</style>
