<script>
    let showFilter = false; // Stav pro zobrazení filtru

    function toggleFilter() {
        showFilter = !showFilter;
    }
</script>

<!--NE UPLNE TOHLE-->

<main>
    <div class="filter-container">
        <!-- Tlačítko se šipkou -->
        <button
            class="toggle-btn"
            onclick={toggleFilter}
            aria-label="Toggle filter"
        >
            <span class="bar top" class:rotate={showFilter}></span>
            <span class="bar bottom" class:rotate={showFilter}></span>
        </button>

        <!-- Rozbalovací filtr -->
        {#if showFilter}
            <div class="filter-menu">
                <label
                    >Obchod:
                    <select>
                        <option>Billa</option>
                        <option>Globus</option>
                        <option>Lidl</option>
                    </select>
                </label>

                <label
                    >Datum:
                    <input type="date" />
                </label>

                <label
                    >Produkt:
                    <input type="text" placeholder="Název produktu" />
                </label>
            </div>
        {/if}
    </div>
</main>

<style>
    .filter-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    /* Styl tlačítka */
    .toggle-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px;
        transition: transform 0.3s ease-in-out;
    }

    /* Čárky na šipku */
    .bar {
        width: 30px;
        height: 4px;
        background: black;
        border-radius: 5px;
        transition: transform 0.3s ease-in-out;
    }

    /* Animace šipky */
    .rotate.top {
        transform: rotate(45deg) translateY(6px);
    }
    .rotate.bottom {
        transform: rotate(-45deg) translateY(-6px);
    }

    /* Styl rozbalovacího filtru */
    .filter-menu {
        margin-top: 10px;
        background: #f1f1f1;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 200px;
    }

    label {
        font-weight: bold;
    }

    select,
    input {
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
</style>
