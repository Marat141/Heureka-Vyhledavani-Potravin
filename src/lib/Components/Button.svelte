<script>
    export let label = 'Zmáčni'; // Výchozí hodnota tlačítka
    export let onClick; // Handler kliknutí
    export let customClass = ''; // Vlastní třída

    function handleClick() {
        if (onClick) {
            onClick(); // Spusť handler, pokud existuje
        }
    }
</script>

<button class={`button ${customClass}`} onclick={handleClick}>
    {label}
</button>

<style lang="scss">
.button {
    display: inline-block;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #800080, #b800ff);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(128, 0, 128, 0.5);
}

.button:hover {
    background: linear-gradient(135deg, #b800ff, #800080);
    box-shadow: 0 6px 15px rgba(186, 85, 211, 0.7);
    transform: scale(1.05);
}

.button:active {
    transform: scale(0.98);
    box-shadow: 0 3px 8px rgba(128, 0, 128, 0.4);
}
</style>
