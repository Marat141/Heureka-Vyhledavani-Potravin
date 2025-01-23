<footer>
    <div class="footer-container">
        <div class="footer-section">
            <h3>Informace o mně</h3>
            <a href="https://www.souepl.cz/" target="_blank">Moje škola</a>
            <a href="https://www.instagram.com/fidorka_141/" target="_blank">Můj Instagram</a>
            <a href="https://github.com/Marat141" target="_blank">Můj GitHub</a>
            <a href="https://github.com/PanUcitelCz" target="_blank">Můj učitel</a>
        </div>
        <div class="footer-section">
            <h3>O téhle stránce</h3>
            <a href="/About" target="_blank">O nás</a>
            <a href="/Feedback" target="_blank">Vylepšení</a>
            <a href="https://www.kupi.cz/" target="_blank">Inspirace</a>
        </div>
        <div class="footer-section">
            <h3>Sociální sítě</h3>
            <a href="https://www.instagram.com/fidorka_141/" target="_blank">
                <img src="/icons8-ig.svg" alt="Instagram">
            </a>
            <a href="https://github.com/Marat141" target="_blank">
                <img src="/icons8-github.svg" alt="GitHub">
            </a>
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&t=2s" target="_blank">
                <img src="/icons8-pornhub.svg" alt="YouTube">
            </a>
        </div>
    </div>
</footer>

<style>
footer {
    background-color: #f8f9fa;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 40px;
    margin: auto;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
}

.footer-section {
    flex: 1;
    text-align: center; /* Zarovnání obsahu na střed */
}

.footer-section h3 {
    font-size: 18px;
    font-weight: bold;
    color: #ff5722;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
}

.footer-section a {
    display: block; /* Odkazy pod sebou */
    text-decoration: none;
    color: #555;
    font-size: 14px;
    margin-bottom: 8px;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #ff5722;
}

.footer-section img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    vertical-align: middle;
}

.footer-section a img:hover {
    filter: brightness(0.8);
}

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        gap: 20px;
    }

    .footer-section {
        width: 100%;
    }
}
</style>
