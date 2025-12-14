<script>
    export let data;
    const product = data.item_name;
    import Card from '$lib/Card.svelte';
    let products = data.item_name;
</script>



<div class="homepage">
    <div class="hero">
        <h1>Welcome to Toadally! Explore vibrant frogs, toads, and more. Your next fascinating companion awaits.</h1>
    </div>
    <div class="products-grid">
      {#each products as product}
        <a href="/products/{product.id}" class="product-card">
          <div class="product-image">
            <img 
              src={product.image} 
              alt={product.item_name}
            />
          </div>
          <div class="product-info">
            <h3>{product.item_name}</h3>
            <p>${product.price?.toFixed(2) || '0.00'}</p>
          </div>
        </a>
      {/each}
    </div>
</div>
<main>
    {#each data.products as product}
        <Card
        item_name={product.item_name}
        image={product.image}
        id={product.id}
        price={product.price}
        description={product.description}
        />
    {/each}
</main>