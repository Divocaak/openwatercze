<script>
	import ArticleCard from '$lib/ArticleCard.svelte';

	export let data;
	let articles = data.articles;
</script>

<svelte:head>
	<title>Články</title>
</svelte:head>

{#each articles as article}
	<ArticleCard {article} />
{/each}