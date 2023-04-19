<script>
	import ArticleCard from '../lib/ArticleCard.svelte';

	export let data;
	let articles = data.articles;
</script>

<svelte:head>
	<!-- TODO sladit s nadpisem -->
	<!-- TODO favicon -->
	<title />
</svelte:head>

<div class="bg-img" />
<div class="content bg-light">
	<div class="row">
		<div class="col-12 text-center">
			<h1 class="display-1">"OpenWater cze" je jméno?</h1>
		</div>
		<div class="col-12 d-md-none p-5">
			<a
				href="https://www.instagram.com/openwater_cze/"
				class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block"
				><i class="bi bi-instagram pe-2" />Instagram</a
			>
			<a
				href="https://www.instagram.com/openwater_cze/"
				class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block"
				><i class="bi bi-facebook pe-2" />udělějte si facebook pls</a
			>
			<a
				href="tel:132123321"
				class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block pt-5"
				><i class="bi bi-telephone pe-2" />132&nbsp;123&nbsp;321</a
			>
			<a
				href="mailto:mail@mail.mail"
				class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block"
				><i class="bi bi-envelope pe-2" />mail@mail.mail</a
			>
		</div>
		<div class="col-12 col-md-9 p-5">
			{#each articles as article}
				<ArticleCard {article} />
			{/each}
		</div>
		<div class="d-none d-md-block col-md-3 contacts-wrapper mt-5">
			<a
				href="https://www.instagram.com/openwater_cze/"
				class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block"
				><i class="bi bi-instagram pe-2" />Instagram</a
			>
			<a
				href="https://www.instagram.com/openwater_cze/"
				class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block"
				><i class="bi bi-facebook pe-2" />udělějte si facebook pls</a
			>
			<div class="contact mb-5">
				<a
					href="tel:132123321"
					class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block"
					><i class="bi bi-telephone pe-2" />132&nbsp;123&nbsp;321</a
				>
				<a
					href="mailto:mail@mail.mail"
					class="text-secondary link-underline-secondary link-offset-2 link-underline-opacity-50 d-block"
					><i class="bi bi-envelope pe-2" />mail@mail.mail</a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-img {
		background-image: url('/images/backdrop.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: fixed;
		height: 100vh;
		width: 100vw;
	}

	.content {
		position: relative;
		top: 100vh;
		min-height: 100vh;
	}

	.contacts-wrapper {
		min-height: 100vh;
	}

	.contact {
		position: absolute;
		top: 30vh;
	}
</style>
