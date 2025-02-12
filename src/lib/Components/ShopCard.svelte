<script>
	// Typové argumenty pro props
	let { href, image, name } = $props();

	let cardClass = $derived("shop-card");
</script>

<a {href} class={cardClass}>
	<img src={image} alt={name} />
	<p>{name}</p>
</a>

<style>
	.shop-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		border: 1px solid #ddd;
		padding: 10px;
		border-radius: 8px;
		transition: transform 0.2s ease;
		background: white;
		width: 200px;
	}

	.shop-card img {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.shop-card:hover {
		transform: scale(1.05);
	}
</style>
