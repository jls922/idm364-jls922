<script>
    export let data;
    const product = data.products;
    import { addToBag } from '$lib/stores/cart.svelte.js';
</script>

<!-- Add error state UI -->
<div class="product-page">
    <img class="product-image" src="/images/products/{product.image}" alt="{name}"/>
    <div class="product-content">
        <h1>{product.item_name}</h1>
        <h3>{product.price}</h3>
        <img src="../../../../static/images/frogs/{product.image}" alt="Image of {product.item_name}" />
        
        <p>{product.description}</p>
        <button class="add-to-cart" on:click={() => addToBag(product)}>
            <img src="../../../../static/images/shopping-bag.svg" alt="Shopping Bag" />
            <h6>Add to Bag</h6>
        </button>
    </div>
    <a class="back" href="../"><h5>← Continue Shopping</h5></a>
</div>