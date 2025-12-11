<script>
    export let data;
    const product = data.item-name;
    import Card from '$lib/Card.svelte';
    let products = data.item-name;
</script>

<div class="homepage">
    <div class="hero">
        <h1>Welcome to Toadally! Explore vibrant frogs, toads, and more. Your next fascinating companion awaits.</h1>
    </div>
    <!--
    <div class="featured-products">
        <h2>Featured Products</h2>
        <div class="products-display">
            {#each products as product}
                <Card
                    image={product.image}
                    name={product.name}
                    pieceCount={product.pieceCount}
                    price={product.price}
                    description={product.description}
                    id={product.id}
                />
            {/each}
        </div>
    </div>
    -->
    <div class="products-grid">
      {#each products as product}
        <a href="/products/{product.id}" class="product-card">
          <div class="product-image">
            <img 
              src={product.image_url || '/images/favicon.png'} 
              alt={product.name}
            />
          </div>
          <div class="product-info">
            <h3 class="product-name">{product.name}</h3>
            <p class="product-price">${product.price?.toFixed(2) || '0.00'}</p>
          </div>
        </a>
      {/each}
    </div>
</div>

<style>
  :global(body) {
    background-color: white;
    margin: 0;
    padding: 0;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .product-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    display: block;
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .product-image {
    width: 100%;
    aspect-ratio: 1;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .product-image img {
    width: 80%;
    height: 80%;
    object-fit: fill;
    padding: 55px;
  }

  .product-info {
    padding: 12px;
  }

  .product-name {
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: black;
    margin: 0 0 0.5rem 0;
  }

  .product-price {
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: black;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }

    .products-grid {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 1rem;
    }
  }
</style>