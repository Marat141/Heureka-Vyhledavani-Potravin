<script>
    import Button from "$lib/Components/Button.svelte";

    let email = $state(""); // Reaktivní stav pro email
    let showError = $state(false); // Reaktivní stav pro zobrazení chyby
    let errorMessage = $state(""); // Reaktivní chybová zpráva

    // Funkce na validaci emailu
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Efekt sledující změnu emailu a jeho validitu
    $effect(() => {
        if (showError) {
            if (!email.trim()) {
                errorMessage = "Zadejte email prosím."; // Chybí email
            } else if (!isValidEmail(email)) {
                errorMessage =
                    "Zadejte platný email, například: uzivatel@gmail.com"; // Neplatný formát
            } else {
                errorMessage = ""; // Email je platný
            }
        }
    });

    function handleSubmit() {
        if (!email.trim() || !isValidEmail(email)) {
            showError = true;
        } else {
            showError = false;
            console.log("Email odeslán:", email);
            // Další zpracování, např. volání API
        }
    }
</script>

<main>
    <div class="window-forget-password">
        <h1>Zapomenuté heslo, ověření emailu</h1>
        <div class="inputs">
            <input
                type="text"
                placeholder="Email"
                bind:value={email}
                class:error={showError}
            />
            {#if showError && errorMessage}
                <p class="error-text">{errorMessage}</p>
            {/if}
            <Button
                label="Odeslat"
                class="custom-forget-button"
                onClick={handleSubmit}
            />
        </div>
    </div>
</main>
