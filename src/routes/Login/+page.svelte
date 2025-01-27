<script>
    import Button from "$lib/Components/Button.svelte";

    let userName = "";
    let password = "";
    let userNameError = "";
    let passwordError = "";

    function submitForm() {
        let hasError = false;

        if (!userName.trim()) {
            userNameError = "Vyplňte Uživatelské jméno nebo Email";
            hasError = true;
        } else {
            userNameError = "";
        }

        if (!password.trim()) {
            passwordError = "Vyplňte heslo";
            hasError = true;
        } else {
            passwordError = "";
        }

        if (!hasError) {
            console.log("Přihlašovací údaje:", userName, password);
        }
    }
</script>

<main>
    <div class="window">
        <button class="register-button">
            <a href="/Register">Registrace</a>
        </button>
        <h1>Přihlášení</h1>
        <div class="inputs">
            <input
                type="text"
                placeholder="Jméno nebo Email"
                bind:value={userName}
            />
            {#if userNameError}
                <div class="error-message">{userNameError}</div>
            {/if}
            <input type="password" placeholder="Heslo" bind:value={password} />
            {#if passwordError}
                <div class="error-message">{passwordError}</div>
            {/if}
        </div>
        <a href="./ForgetPassword" class="forgot-password">Zapomenuté heslo</a>
        <Button label="Přihlásit se" onClick={submitForm} />
    </div>
</main>

<style>
/* Základní styly */
.window {
    position: relative; /* Aby bylo možné zarovnat tlačítko uvnitř */
    max-width: 400px;
    margin: 100px auto;
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

.register-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: linear-gradient(135deg, #ff5722, #e64a19);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition:
        background 0.3s,
        transform 0.2s,
        box-shadow 0.3s;
}

.register-button a {
    color: #fff;
    text-decoration: none;
}

.register-button:hover {
    background: linear-gradient(135deg, #e64a19, #ff5722);
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.register-button:active {
    transform: scale(0.97);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
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

.forgot-password {
    display: inline-block;
    margin-top: 10px;
    color: #ff5722;
    text-decoration: none;
    font-size: 14px;
    margin-right: 10px;
}

.forgot-password:hover {
    text-decoration: underline;
}

/* Media Queries pro mobilní zařízení */
@media (max-width: 768px) {
    .window {
        max-width: 400px; /* Zachová šířku obsahu */
        margin: 50px 20px; /* Odsazení 20px zleva a zprava */
        padding: 15px;
    }

    .window h1 {
        font-size: 20px;
    }

    .register-button {
        font-size: 10px;
        padding: 4px 8px;
        top: 5px;
        right: 5px;
    }

    .inputs input {
        font-size: 14px;
        padding: 8px;
    }

    .error-message {
        font-size: 12px;
    }

    .forgot-password {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .window {
        max-width: 400px; /* Zachová šířku obsahu */
        margin: 30px 20px; /* Odsazení 20px zleva a zprava */
        padding: 10px;
    }

    .window h1 {
        font-size: 18px;
    }

    .register-button {
        font-size: 9px;
        padding: 3px 6px;
    }

    .inputs input {
        font-size: 12px;
        padding: 6px;
    }

    .error-message {
        font-size: 11px;
    }

    .forgot-password {
        font-size: 11px;
    }
}

</style>
