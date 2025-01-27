<script>
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header>
  <div class="header-container">
    <!-- Logo -->
    <div class="logo-header">
      <a href="/"><img src="/Logo-food.png" alt="Logo"></a>
      <h1>Good-Food</h1>
    </div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <a href="/">Domov</a>
      <a href="/Category">Kategorie</a>
      <a href="/Product">Produkty</a>
      <a href="/Stores">Obchody</a>
    </nav>

    <!-- Profile Icon and Hamburger -->
    <div class="mobile-controls">
      <a href="/Profile" class="profile-icon">
        <img src="/Avatar-male-pic.png" alt="Profil">
      </a>
      <div class="hamburger" onclick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if menuOpen}
    <nav class="mobile-nav">
      <a href="/">Domov</a>
      <a href="/Category">Kategorie</a>
      <a href="/Product">Produkty</a>
      <a href="/Stores">Obchody</a>
    </nav>
  {/if}
</header>

<style>
  header {
    background-color: #f8f9fa;
    padding: 10px 20px;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo-header {
    display: flex;
    align-items: center;
  }

  .logo-header img {
    max-height: 50px;
    margin-right: 10px;
  }

  .logo-header h1 {
    font-size: 24px;
    color: #ff5722;
    margin: 0;
  }

  .desktop-nav {
    display: flex;
    gap: 20px;
  }

  .desktop-nav a {
    text-decoration: none;
    color: #ff5722;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 4px;
    transition: 0.3s;
  }

  .desktop-nav a:hover {
    background-color: #ff5722;
    color: #ffffff;
  }

  .mobile-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .profile-icon img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #ff5722;
  }

  .hamburger {
    display: none; /* Defaultně skryté */
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .hamburger span {
    width: 30px;
    height: 3px;
    background-color: #ff5722;
    border-radius: 2px;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 60px;
    right: 20px;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .hamburger {
      display: flex; /* Zobrazí hamburger pouze na mobilním rozlišení */
    }
  }
</style>
