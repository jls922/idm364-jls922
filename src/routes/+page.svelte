<script>
    export let data;
    const product = data.item-name;
    import Card from '$lib/Card.svelte';
    let products = data.item-name;
</script>

<div class="homepage">
    <div class="hero">
        <h1>Welcome to Toadally Awesome! Explore vibrant frogs, toads, and more. Your next fascinating companion awaits.</h1>
    </div>
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
</div>