<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment"; // Přidáme kontrolu, jestli běžíme na klientovi
  import { Hamburger } from "svelte-hamburgers";

  let menuOpen = false;

  const menu_list = [
    { name: "Domov", url: "./" },
    { name: "Produkty", url: "/Product" },
    { name: "Obchody", url: "/Stores" },
  ];

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenuOnResize() {
    if (window.innerWidth > 768) {
      menuOpen = false;
    }
  }

  if (browser) {
    onMount(() => {
      window.addEventListener("resize", closeMenuOnResize);
    });

    onDestroy(() => {
      window.removeEventListener("resize", closeMenuOnResize);
    });
  }
</script>


<header>
  <div class="header-container">
    <div class="logo-header">
      <a href="/"><img src="/Logo-food.png" alt="Logo" /></a>
      <a href="/" class="title-h1-a"><h1>Good-Food</h1></a>
    </div>

    <div class="desktop-nav">
      {#each menu_list as menu}
        <a href={menu.url}>{menu.name}</a>
      {/each}
    </div>

    <div class="mobile-controls">
      <a href="/Profile" class="profile-icon">
        <img src="/Avatar-male-pic.png" alt="Profil" />
      </a>
      <div class="hamburger-container">
        <!--on:click={toggleMenu} nechat!!! Kvuli Hamburger protoze je to jeste ze svelte 5 ale funguje to        -->
        <Hamburger
          bind:open={menuOpen}
          on:click={toggleMenu}
          type="spin"
          --color="#ff5722"
          size={30}
        />
      </div>
    </div>
  </div>

  <div class="mobile-nav {menuOpen ? 'open' : ''}">
    {#each menu_list as menu}
      <a href={menu.url}>{menu.name}</a>
    {/each}
  </div>
</header>

<style lang="scss">
  header {
    background-color: #f8f9fa;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 10px;
    position: relative;

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;

      .logo-header {
        flex: 1;
        display: flex;
        align-items: center;

        img {
          max-height: 50px;
          margin-right: 10px;
        }

        h1 {
          font-size: 24px;
          color: #ff5722;
          margin: 0;
          font-family: "Arial", sans-serif;
        }

        .title-h1-a {
          text-decoration: none;
        }
      }

      .desktop-nav {
        display: flex;
        justify-content: center;
        gap: 20px;

        a {
          font-size: 16px;
          font-weight: bold;
          color: #ff5722;
          transition: color 0.3s;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          display: none;
        }
      }

      .mobile-controls {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        padding-left: 20px;

        .profile-icon img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #ff5722;
        }

        .hamburger-container {
          display: none;

          @media (max-width: 768px) {
            display: flex;
          }
        }
      }
    }

    .mobile-nav {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 200px;
      background: #f8f9fa;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      z-index: 1;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      gap: 36px;

      &.open {
        transform: translateX(0);
        padding-top: 80px;
        z-index: 1;
      }

      a {
        font-size: 16px;
        font-weight: bold;
        color: #555;
        text-decoration: none;
        font-family: "Arial", sans-serif;

        &:hover {
          color: #ff5722;
        }
      }
    }

    .hamburger-container {
      display: none;
      z-index: 10;
    }
  }
</style>
