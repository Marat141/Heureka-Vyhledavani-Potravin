<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<div class="menu-container">
    <!-- Tlačítko pro zobrazení menu -->
    <button class="toggle-button" onclick={toggleMenu}>
        <svg
            class="arrow-icon"
            style:transform={`rotate(${isOpen ? "180deg" : "0deg"})`}
            viewBox="0 0 24 24"
        >
            <path d="M7 10l5 5 5-5H7z"></path>
        </svg>
    </button>

    {#if isOpen}
        <div class="menu">
            <div class="section">
                <div class="section-title">Obchody</div>
                <label><input type="checkbox" /> Globus</label>
                <label><input type="checkbox" /> Billa</label>
                <label><input type="checkbox" /> ETC</label>
            </div>

            <div class="section">
                <div class="section-title">Druh jídla</div>
                <label><input type="checkbox" /> Maso</label>
                <label><input type="checkbox" /> Mléčné výrobky</label>
                <label><input type="checkbox" /> Pečivo</label>
                <label><input type="checkbox" /> Alkohol</label>
                <label><input type="checkbox" /> ETC</label>
            </div>

            <div class="section">
                <div class="section-title">Filtr</div>
                <label><input type="checkbox" /> Nejnovější</label>
                <label><input type="checkbox" /> A-Z</label>
                <label><input type="checkbox" /> Z-A</label>
                <label><input type="checkbox" /> Nejstarší</label>
                <label><input type="checkbox" /> Nejoblíbenější</label>
                <label><input type="checkbox" /> Nejukládanější</label>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .menu-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }

    .toggle-button {
        background: #e0e0e0;
        border: none;
        padding: 12px;
        cursor: pointer;
        border-radius: 50px;
        box-shadow:
            4px 4px 8px rgba(0, 0, 0, 0.2),
            -4px -4px 8px rgba(255, 255, 255, 0.7);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;

        &:hover {
            box-shadow:
                2px 2px 4px rgba(0, 0, 0, 0.2),
                -2px -2px 4px rgba(255, 255, 255, 0.7);
        }
    }

    .arrow-icon {
        width: 24px;
        height: 24px;
        fill: #333;
        transition: transform 0.3s ease;
    }

    .menu {
        position: absolute;
        top: 60px;
        background: #e0e0e0;
        border-radius: 12px;
        padding: 15px;
        width: 320px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        box-shadow:
            4px 4px 8px rgba(0, 0, 0, 0.2),
            -4px -4px 8px rgba(255, 255, 255, 0.7);
    }

    .section {
        width: 48%;
    }

    .section-title {
        font-weight: bold;
        margin: 10px 0;
        color: #333;
    }

    label {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 5px 0;
        font-size: 14px;
        color: #333;
        cursor: pointer;
    }

    input[type="checkbox"] {
        appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid #333;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        background-color: transparent;

        &:checked {
            background-color: #ff5722;
            border-color: #333;
            background-image: url("/icons8-correct.svg");
            background-size: 12px 12px;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    @media (max-width: 480px) {
        .menu {
            flex-direction: column;
        }

        .section {
            width: 100%;
        }
    }
</style>
