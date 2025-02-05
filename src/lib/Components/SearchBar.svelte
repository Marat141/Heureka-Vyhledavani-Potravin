<script>
    let searchQuery = "";

    function clearSearch() {
        searchQuery = "";
    }
</script>

<div class="search-wrapper">
    <form class="search-container">
        <!-- SVG ikona lupy vlevo -->
        <div class="search-icon">
            <svg
                class="e-icon c-search__icon"
                aria-hidden="true"
                width="20"
                height="20"
            >
                <use xlink:href="#ou-search"></use>
            </svg>
        </div>

        <input
            type="search"
            bind:value={searchQuery}
            placeholder="Vyheukreujte si to"
            aria-label="Vyheukreujte si to"
            autocomplete="off"
            class="search-input"
        />

        <button class="search-button" type="submit">Hledat</button>
    </form>
</div>

<!-- SVG definice -->
<svg style="display: none;">
    <symbol id="ou-search" viewBox="0 0 24 24">
        <path d="M21 21l-4.35-4.35" stroke="black" stroke-width="2" />
        <circle
            cx="10"
            cy="10"
            r="7"
            stroke="black"
            stroke-width="2"
            fill="none"
        />
    </symbol>
</svg>

<style>
    .search-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        margin-bottom: 1px;
    }

    .search-container {
        display: flex;
        align-items: center;
        background: #f5f5f5;
        border-radius: 25px;
        padding: 0;
        width: 100%;
        max-width: 450px;
        border: 1px solid #ddd;
        position: relative;
        overflow: hidden; /* Aby se tlačítko správně spojilo s inputem */
    }

    .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        pointer-events: none;
    }

    .search-input {
        border: none;
        background: transparent;
        flex: 1;
        padding: 12px;
        padding-left: 40px;
        font-size: 16px;
        outline: none;
        color: #333;
    }

    /* Styl tlačítka "Hledat" podle obrázku */
    .search-button {
        background: #0078d4;
        color: white;
        border: none;
        padding: 14px 20px;
        border-radius: 0 25px 25px 0; /* Zaoblené jen pravé rohy */
        cursor: pointer;
        font-weight: bold;
        margin-left: 0;
    }

    .search-button:hover {
        background: #005bb5;
    }
</style>
