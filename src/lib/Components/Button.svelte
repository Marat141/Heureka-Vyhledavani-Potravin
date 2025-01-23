<script>
    export let label = 'Zmáčni'; // Výchozí text tlačítka
    export let onClick; // Klikací funkce
    export let customClass = ''; // Vlastní třída, pokud je potřeba

    function handleClick() {
        if (onClick) {
            onClick(); // Spusť handler, pokud existuje
        }
    }
</script>

<button class={`button ${customClass}`} onclick={handleClick}>
    {label}
</button>

<style>
.button {
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(135deg, #ff5722, #e64a19);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button:hover {
    background: linear-gradient(135deg, #e64a19, #ff5722);
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
    transform: scale(0.97);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
