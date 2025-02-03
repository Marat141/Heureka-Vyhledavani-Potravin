<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	import Header from "$lib/Components/Header.svelte";
	import Footer from "$lib/Components/Footer.svelte";
	import SearchBar from "$lib/Components/SearchBar.svelte";

	let { children } = $props();
	let isLogginIn = $state(false);

	// Cesty, kde se SearchBar NEMÁ zobrazit
	const blockedPaths = [
		'/Settings',
		'/NewPassword',
		'/Login',
		'/ForgetPassword',
		'/Feedback',
		'/About',
		'/Profile', 
		'/Register'
	];

	// Kontrolujeme, zda stránka není mezi zakázanými
	const showSearchBar = derived(page, $page =>
		!blockedPaths.some(path => $page.url.pathname.startsWith(path))
	);
</script>

<Header />

{#if $showSearchBar}
	<SearchBar />
{/if}

{@render children()}

<Footer />
