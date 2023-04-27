<script>
	export let imgName,
		name,
		club,
		titles,
		instagram = null;
</script>

<div class="col-4">
	<div class="card mb-3 shadow-lg">
		<img src="/repre/{imgName}.jpg" class="card-img-top" alt={name} />
		<div class="card-body">
			<h5 class="card-title">{name}</h5>
			<p class="card-text lead">({club})</p>
			<p class="card-text">{titles}</p>
			{#if instagram !== null}
				<a href="https://www.instagram.com/{instagram}" class="btn btn-outline-secondary mt-1 me-1 instagram" target="_blank"
					><i class="bi bi-instagram pe-2" />Instagram</a
				>
			{/if}
		</div>
	</div>
</div>

<style>
	.instagram,
	.instagram:active,
	.instagram:visited,
	.instagram:focus {
		border-color: #bc2a8d;
		color: #bc2a8d;
	}

	.instagram:hover {
		background-color: #bc2a8d;
		color: #f8f9fa;
	}
</style>
