<script>
    /*
    Funkce: Umožní uživateli zadat název potraviny (např. maso) a spustit vyhledávání.
    Props: onSearch (callback pro předání vyhledávacího dotazu rodiči).
    Interaktivní funkce: Reactivní stav pro hodnotu vstupu
    */
    import { Search, Button } from 'flowbite-svelte';
    import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<form class="flex gap-2">
  <Search size="md" />
  <Button class="!p-2.5">
    <SearchOutline class="w-6 h-6" />
  </Button>
</form>