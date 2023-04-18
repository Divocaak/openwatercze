<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
	/>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
		crossorigin="anonymous"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
		crossorigin="anonymous"
	></script>
</svelte:head>

<slot />

<style lang="scss">
	/* @font-face {
		font-family: 'NeueMachina';
		src: url('/neueMachina/NeueMachina-Regular.otf');
	}

	@font-face {
		font-family: 'NeueMachina';
		src: url('/neueMachina/NeueMachina-Ultrabold.otf');
		font-weight: bold;
	} */

	:global(html) {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	/* :global(.neue) {
		font-family: 'NeueMachina';
	}

	:global(.neue-bold) {
		font-family: 'NeueMachina';
		font-weight: bold;
	} */
</style>
