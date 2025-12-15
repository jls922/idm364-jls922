<script>
    export let data;
    const product = data.product; // Changed from data.products
    import { addToBag } from '$lib/stores/cart.svelte.js';
</script>

<div class="product-page">
    <img class="product-image" src="/{product.image}" alt={product.item_name}/>
    <div class="product-content">
        <h1>{product.item_name}</h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <p>Size: {product.size}</p>
        <p>Weight: {product.weight}</p>
        <button class="add-to-bag" on:click={() => addToBag(product)}>
            <!--<div class="shopping-bag">
                <img src="/images/shopping-bag.svg" alt="Shopping Bag" />
            </div> -->
            <h6>Add to Bag</h6>
        </button>
    </div>
</div>