<script>
	import DateText from '$lib/DateText.svelte';

	export let article;
</script>

<div class="card mb-3 shadow">
	<img
		src="./dynamic/thumbnails/{article.id}.jpg"
		class="card-sizer"
		alt="{article.label} (nelze načíst obrázek, id: {article.id})"
	/>
	<div class="card-body">
		<h1 class="card-title">{article.label}</h1>
		{#if article.article_type != null}
			<h4 class="card-subtitle mb-2 text-muted">{article.article_type}</h4>
		{/if}
		<DateText date={article.created} />
		{#if article.short_desc != null}
			<p class="card-text">{article.short_desc}</p>
		{/if}
		<div class="text-end">
			<a href="/{article.id}" class="btn btn-outline-primary">Přečíst</a>
		</div>
	</div>
</div>

<style>
	.card-sizer {
		position: relative;
		width: 100%;
		height: 30rem;
		display: block;
		object-fit: cover;
	}
</style>
