<script>
	export let imgName, label, desc;
</script>

<div class="col-4">
	<div class="card mb-3 shadow-lg">
		<img src="/repre/{imgName}.jpg" class="card-img-top" alt={label} />
		<div class="card-body">
			<h5 class="card-title">{label}</h5>
			<p class="card-text">{desc}</p>
		</div>
	</div>
</div>
