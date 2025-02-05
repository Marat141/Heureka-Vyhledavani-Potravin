<script>
	// Importuje store 'page', který obsahuje informace o aktuální stránce včetně chyb
	import { page } from '$app/stores';
</script>

<!-- Zobrazí zprávu chyby, pokud existuje -->
<h1>{$page.error?.message}</h1>

<!-- Statická hláška pro uživatele, že nemá přístup -->
<p>Nejste přihlášený, sem může jen administrátor</p>

<!-- Odkaz pro návrat na hlavní stránku -->
<a href="/">Zpět na hlavní stránku</a>
