<script>
    import Button from "$lib/Components/Button.svelte";


    let oldPassword = $state("");
    let newPassword = $state("");
    let confirmNewPassword = $state("");
    let oldPasswordError = $state("");
    let newPasswordError = $state("");
    let confirmPasswordError = $state("");

    function submitForm() {
        let hasError = false;

        // Ověření starého hesla
        if (!oldPassword.trim()) {
            oldPasswordError = "Vyplňte správně staré heslo";
            hasError = true;
        } else {
            oldPasswordError = "";
        }

        // Ověření nového hesla
        if (!newPassword.trim()) {
            newPasswordError = "Vyplňte nové heslo";
            hasError = true;
        } else if (newPassword.length < 8) {
            newPasswordError = "Heslo musí mít alespoň 8 znaků";
            hasError = true;
        } else {
            newPasswordError = "";
        }

        // Ověření potvrzení hesla
        if (!confirmNewPassword.trim()) {
            confirmPasswordError = "Vyplňte potvrzení hesla";
            hasError = true;
        } else if (newPassword !== confirmNewPassword) {
            confirmPasswordError = "Hesla se neshodují";
            hasError = true;
        } else {
            confirmPasswordError = "";
        }

        if (!hasError) {
            console.log("Heslo bylo úspěšně změněno!");
        }
    }
</script>

<main>
    <div class="window-reset">
        <h1>Obnovit heslo</h1>
        <div class="inputs">
            <!-- Vstup pro staré heslo -->
            <input
                type="password"
                placeholder="Staré heslo"
                bind:value={oldPassword}
            />
            {#if oldPasswordError}
                <div class="error-message">{oldPasswordError}</div>
            {/if}

            <!-- Vstup pro nové heslo -->
            <input
                type="password"
                placeholder="Nové heslo"
                bind:value={newPassword}
            />
            {#if newPasswordError}
                <div class="error-message">{newPasswordError}</div>
            {/if}

            <!-- Vstup pro potvrzení hesla -->
            <input
                type="password"
                placeholder="Potvrdit nové heslo"
                bind:value={confirmNewPassword}
            />
            {#if confirmPasswordError}
                <div class="error-message">{confirmPasswordError}</div>
            {/if}
        </div>

        <Button label="Obnovit heslo" onClick={submitForm} />
    </div>
</main>
