<script>
    import Button from "$lib/Components/Button.svelte";

    let email = "";
    let showError = false;
    let errorMessage = "";

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleSubmit() {
        if (!email.trim() || !isValidEmail(email)) {
            showError = true;
            errorMessage = "Zadejte platný email.";
        } else {
            showError = false;
            console.log("Email odeslán:", email);
        }
    }
</script>

<main>
    <div class="window">
        <h1>Zapomenuté heslo</h1>
        <div class="inputs">
            <input type="text" placeholder="Email" bind:value={email} />
            {#if showError && errorMessage}
                <div class="error-message">{errorMessage}</div>
            {/if}
        </div>
        <Button label="Odeslat" onClick={handleSubmit} />
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
