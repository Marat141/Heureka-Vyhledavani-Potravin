<script>
    import Button from "$lib/Components/Button.svelte";

    let userName = $state("");
    let password = $state("");
    let userNameError = $state("");
    let passwordError = $state("");

    function submitForm() {
        let hasError = false;

        // Ověření uživatelského jména
        if (!userName.trim()) {
            userNameError = "Vyplňte Uživatelské jméno nebo Email";
            hasError = true;
        } else {
            userNameError = "";
        }

        // Ověření hesla
        if (!password.trim()) {
            passwordError = "Vyplňte heslo";
            hasError = true;
        } else {
            passwordError = "";
        }

        // Pokud nejsou chyby, zpracuj formulář
        if (!hasError) {
            console.log("Přihlašovací údaje:", userName, password);
        }
    }
</script>

<main>
	<div class="window-login">
		<h1>Login</h1>
		<div class="inputs">
			<!-- Vstup pro uživatelské jméno -->
			<input type="text" placeholder="Jméno nebo Email" bind:value={userName}>
			{#if userNameError}
				<div class="error-message">{userNameError}</div>
			{/if}

			<!-- Vstup pro heslo -->
			<input type="password" placeholder="Heslo" bind:value={password}>
			{#if passwordError}
				<div class="error-message">{passwordError}</div>
			{/if}
		</div>

		<a href="./ForgetPassword" class="forgot-password">Zapomenuté heslo</a>
		<!-- Opravené předání handleru do Button -->
		<Button label="Přihlásit se" onClick={submitForm} />
	</div>
</main>
