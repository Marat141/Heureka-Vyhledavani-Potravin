<script>
	import Header from "$lib/Components/Header.svelte";
	import Footer	 from "$lib/Components/Footer.svelte";

	let { children } = $props();
	let isLogginIn = $state(false);
</script>

<Header />


{@render children()}


<Footer />







<style lang="scss">

</style>