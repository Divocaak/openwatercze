<script>
	import DateText from '$lib/DateText.svelte';

	export let data;
	let article = data.article;
</script>

<svelte:head>
	<title>
		{article.label}
	</title>
</svelte:head>

<div class="bg-img" style="background-image: url('/thumbnails/{article.id}.jpg');" />
<div class="content bg-light pt-5">
	<div class="back-arrow">
		<!-- svelte-ignore a11y-missing-content -->
		<a href="/" class="btn btn-close" />
	</div>
	<div class="mx-5 text-center">
		<!-- TODO back arrow -->
		<h1 class="display-1">{article.label}</h1>
		{#if article.article_type != null}
			<h3 class="pt-2">{article.article_type}</h3>
		{/if}
		<DateText date={article.created} />
		{#if article.short_desc != null}
			<p class="pt-5">
				{article.short_desc}
			</p>
		{/if}
		{#if article.long_text != null}
			<p class="pt-3">
				{article.long_text}
			</p>
		{/if}
	</div>
</div>

<style>
	.bg-img {
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

	.back-arrow {
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 2;
	}
</style>
