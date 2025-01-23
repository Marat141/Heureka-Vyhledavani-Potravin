<script>
    import Button from "$lib/Components/Button.svelte";

    let userName = $state("");
    let userNameError = $state("");
    let email = $state("");
    let emailError = $state("");
    let password = $state("");
    let passwordError = $state("");
    let confirmPassword = $state("");
    let confirmPasswordError = $state("");

    function submitForm() {
        let hasError = false;

        // Kontrola uživatelského jména
        if (!userName.trim()) {
            userNameError = "Vyplňte Uživatelské jméno";
            hasError = true;
        } else {
            userNameError = "";
        }

        // Kontrola emailu
        if (!email.trim()) {
            emailError = "Vyplňte Email";
            hasError = true;
        } else {
            emailError = "";
        }

        // Kontrola hesla
        if (!password.trim()) {
            passwordError = "Vyplňte heslo";
            hasError = true;
        } else {
            passwordError = "";
        }

        // Kontrola potvrzení hesla
        if (!confirmPassword.trim()) {
            confirmPasswordError = "Vyplňte potvrzení hesla";
            hasError = true;
        } else if (password !== confirmPassword) {
            confirmPasswordError = "Hesla se neshodují";
            hasError = true;
        } else {
            confirmPasswordError = "";
        }

        // Zpracování formuláře, pokud nejsou chyby
        if (!hasError) {
            console.log("Formulář byl úspěšně odeslán!", {
                userName,
                email,
                password,
            });
        }
    }
</script>

<main>
	<div class="window-register">
		<h1>Registrace</h1>
		<div class="inputs">
			<!-- Uživatelské jméno -->
			<input type="text" placeholder="Uživatelské jméno" bind:value={userName} />
			{#if userNameError}
				<div class="error-message">{userNameError}</div>
			{/if}

			<!-- Email -->
			<input type="email" placeholder="Email" bind:value={email} />
			{#if emailError}
				<div class="error-message">{emailError}</div>
			{/if}

			<!-- Heslo -->
			<input type="password" placeholder="Heslo" bind:value={password} />
			{#if passwordError}
				<div class="error-message">{passwordError}</div>
			{/if}

			<!-- Potvrzení hesla -->
			<input type="password" placeholder="Potvrzení hesla" bind:value={confirmPassword} />
			{#if confirmPasswordError}
				<div class="error-message">{confirmPasswordError}</div>
			{/if}
		</div>

		<Button 
			label="Registrace" 
			class="custom-register-button"  
			onClick={submitForm} />
	</div>
</main>