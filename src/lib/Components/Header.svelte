<script>

</script>

<header>
    <div class="Header-Container">
        <img src="/Logo-food.png" alt="">
        <a href="/Category">Kategorie</a>
        <a href="/Stores">Obchody</a>
        <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search">
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div>
</header>


<style lang="scss">
header {
  background-color: #f8f9fa; // Jemné pozadí
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Lehký stín pro oddělení
  padding: 10px 20px;

  .Header-Container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    img {
      height: 50px;
      width: auto;
      display: block;
    }

    a {
      margin: 0 15px;
      text-decoration: none;
      font-size: 16px;
      color: #333;
      transition: color 0.3s;

      &:hover {
        color: #007bff; // Modrá při najetí
      }
    }

    .search-container {
      form {
        display: flex;
        align-items: center;

        input {
          border: 1px solid #ddd;
          padding: 5px 10px;
          border-radius: 4px 0 0 4px;
          font-size: 14px;
          outline: none;

          &:focus {
            border-color: #007bff;
          }
        }

        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 5px 10px;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;

          &:hover {
            background-color: #0056b3;
          }

          i {
            font-size: 16px;
          }
        }
      }
    }
  }
}

</style>