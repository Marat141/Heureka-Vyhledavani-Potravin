<script>
	import Header from "$lib/Components/Header.svelte";
	import Footer	 from "$lib/Components/Footer.svelte";
	import SearchBar from "$lib/Components/SearchBar.svelte";

	let { children } = $props();
	let isLogginIn = $state(false);
</script>

<Header />
<SearchBar />

{@render children()}


<Footer />







<style lang="scss">

</style>