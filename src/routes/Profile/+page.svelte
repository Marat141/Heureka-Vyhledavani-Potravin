<script>
    let isLogginIn = $state(false);
    let userName = $state("");

    function handleLogin() {
        isLogginIn = true;
        userName = "";
    }

    function handleLogout() {
    // Odhlášení
    isLoggedIn = false;
    userName = null;
  }
</script>

<main>
    <div class="Login-Register-container">
        <h1>Vítejte na Good-Food</h1>
        <div class="Login-container">
            <button><a href="/Login">Přihlásit se</a></button>
        </div>
        <div class="Register-container">
            <button><a href="/Register">Registrujte se</a></button>
        </div>
    </div>
</main>

<style>
main {
    padding: 40px 20px;
    background-color: #f8f9fa;
    min-height: calc(100vh - 180px); /* Výška stránky minus výška headeru a footeru */
    display: flex;
    align-items: center;
    justify-content: center;
}

.Login-Register-container {
    text-align: center;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

.Login-Register-container h1 {
    font-size: 24px;
    color: #ff5722;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
}

.Login-container, .Register-container {
    margin-bottom: 15px;
}

button {
    background-color: #ff5722;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
}

button a {
    text-decoration: none;
    color: inherit;
}

button a:hover {
    text-decoration: none;
}

@media (max-width: 768px) {
    main {
        padding: 20px;
    }

    .Login-Register-container {
        width: 100%;
    }

    button {
        width: 100%;
        padding: 12px;
    }
}
</style>
