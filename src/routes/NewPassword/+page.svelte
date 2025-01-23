<script>
    import Button from "$lib/Components/Button.svelte";

    let oldPassword = "";
    let newPassword = "";
    let confirmNewPassword = "";
    let oldPasswordError = "";
    let newPasswordError = "";
    let confirmPasswordError = "";

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
    <div class="window">
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

<style>
    .window {
        max-width: 400px;
        margin: 40px auto;
        background-color: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
    }

    .window h1 {
        font-size: 24px;
        color: #ff5722;
        margin-bottom: 20px;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 10px;
    }

    .inputs input {
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        transition: border-color 0.3s;
    }

    .inputs input:focus {
        border-color: #ff5722;
    }

    .error-message {
        color: #e64a19;
        font-size: 14px;
        text-align: left;
    }

    /* Media Queries pro mobilní zařízení */
    @media (max-width: 768px) {
        .window {
            max-width: 400px;
            margin: 50px 20px; /* 20px odsazení zleva a zprava */
            padding: 15px;
        }

        .window h1 {
            font-size: 20px;
        }

        .inputs input {
            font-size: 14px;
            padding: 8px;
        }

        .error-message {
            font-size: 12px;
        }
    }

    @media (max-width: 480px) {
        .window {
            max-width: 400px;
            margin: 30px 20px; /* 20px odsazení zleva a zprava */
            padding: 10px;
        }

        .window h1 {
            font-size: 18px;
        }

        .inputs input {
            font-size: 12px;
            padding: 6px;
        }

        .error-message {
            font-size: 11px;
        }
    }
</style>
