<script>
    import { addToBag } from '$lib/stores/cart.svelte';
    
    let { id, item_name, price, image } = $props();

    const product = { id, item_name, price, image };
</script>

<a class="card-link" href="/products/{id}">
    <div class="product-card">
        <img src="/{image}" alt={item_name} />
        <div class="product-info">
            <h3>{product.item_name}</h3>
            <p>${price}</p>
        </div>
        <!--preventDefault makes it so that it won't interfer with the card's link to the item page. When clicking add to bag, it only does that
        Without it, it would add to bag AND go to the item page-->
        <button onclick={(e) => { e.preventDefault(); addToBag(product); }} class="add-to-bag"> 
            <h6>Add to Bag</h6>
        </button>
    </div>
</a>