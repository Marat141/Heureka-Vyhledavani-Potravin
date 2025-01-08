<script>

</script>

<header>
    <h1>Foodreka</h1>
    <div class="setting">
        <a href="/"><img src="/Setting.png" alt=""></a>
    </div>
</header>


<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #000000; 
  border-bottom: 1px solid #dee2e6;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
  }

  .setting {
    display: flex;
    align-items: center;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      background-color: #fff;
      border: 1px solid #dee2e6;
      border-radius: 50%;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
}

</style>