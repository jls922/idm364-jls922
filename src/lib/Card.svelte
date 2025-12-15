<script>
    import { addToBag } from '$lib/stores/cart.svelte';
    export let id, item_name, price, image; 

    const product = { id, item_name, price, image };
</script>

<a class="card-link" href="/products/{id}">
    <div class="product-card">
        <img src="/{image}" alt={item_name} />
        <div class="product-info">
            <h3>{product.item_name}</h3>
            <p>${price}</p>
        </div>
        <button on:click|preventDefault={() => addToBag(product)} class="add-to-bag">
            <h6>Add to Bag</h6>
        </button>
    </div>
</a>
