<script>

</script>

<header>
    <div class="header-container">
        <div class="logo-header">
            <a href="/"><img src="/Logo-food.png" alt=""></a>
            <h1>Good-Food</h1>
        </div>
        <div class="Search-Area">
            <input type="text" placeholder="Hledat...">
            <input type="submit" value="Hledat">
        </div>
        <div class="Navigation">
            <nav>
              <a href="/">Domov</a>
              <a href="/Category">Kategorie</a>
              <a href="/Product ">Produkty</a>
              <a href="/Stores">Obchody</a>
            </nav>
        </div>
        <div class="Profile-container">
            <a href="/Profile"><img src="" alt="Obrázek"></a>
        </div>
    </div>
</header>

<style>
  header {
    background-color: #f8f9fa;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
  }
  
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo-header {
    display: flex;
    align-items: center;
  }
  
  .logo-header a {
    display: inline-block;
  }
  
  .logo-header img {
    max-height: 50px;
    margin-right: 10px;
  }
  
  .logo-header h1 {
    font-size: 24px;
    color: #ff5722;
    font-family: 'Arial', sans-serif;
    margin: 0;
  }
  
  .Search-Area {
    display: flex;
    align-items: center;
  }
  
  .Search-Area input[type="text"] {
    padding: 8px 12px;
    border: 1px solid #ff5722;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
    outline: none;
  }
  
  .Search-Area input[type="submit"] {
    padding: 8px 16px;
    background-color: #ff5722;
    color: #ffffff;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .Search-Area input[type="submit"]:hover {
    background-color: #e64a19;
  }
  
  .Navigation nav {
    display: flex;
    gap: 20px;
  }
  
  .Navigation nav a {
    text-decoration: none;
    color: #ff5722;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .Navigation nav a:hover {
    background-color: #ff5722;
    color: #ffffff;
  }
  
  .Profile-container a {
    display: inline-block;
  }
  
  .Profile-container img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ff5722;
  }
  
  @media (max-width: 768px) {
    header .header-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .Search-Area {
      margin-top: 10px;
      width: 100%;
    }
  
    .Search-Area input[type="text"] {
      flex-grow: 1;
      width: calc(100% - 110px);
    }
  
    .Search-Area input[type="submit"] {
      width: 100px;
    }
  
    .Navigation {
      margin-top: 10px;
    }
  
    .Navigation nav {
      flex-wrap: wrap;
      gap: 10px;
    }
  
    .Navigation nav a {
      padding: 5px;
    }
  }
  </style>
  