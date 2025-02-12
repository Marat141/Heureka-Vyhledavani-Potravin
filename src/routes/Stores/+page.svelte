<script>
	import ShopCard from "$lib/Components/ShopCard.svelte";

	const stores = [
		{ name: "Globus", href: "./Stores/Globus", image: "./Globus-svg.svg" },
		{ name: "Billa", href: "./Stores/Billa", image: "./Billa-logo.svg" },
		{ name: "Lidl", href: "./Stores/Lidl", image: "./Lidl-logo.svg" }
	];
</script>

<div class="stores-container">
	{#each stores as store}
		<ShopCard href={store.href} image={store.image} name={store.name} />
	{/each}
</div>

<style>
	.stores-container {
		display: flex;
		flex-wrap: wrap; /* Umožní zalomení na menších displejích */
		gap: 60px;
		justify-content: center;
		padding: 20px;
	}

	@media (max-width: 768px) {
		.stores-container {
			flex-direction: column; /* Na mobilu se obchody zobrazí pod sebou */
			align-items: center;
		}
	}
</style>
