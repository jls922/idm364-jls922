<script>
    import { addToBag } from '$lib/stores/cart.svelte';
    export let id, item_name, price, image;
    const product = { id, item_name, price, image };
    console.log('Image path:', image);
</script>

<a class="card-link" href="/shop/{id}">
    <div class="product-card">
        <img src="/images/frogs/{image}" alt={item_name} />
        <div class="product-info">
            <h4>{item_name}</h4>
            <p>{price}</p>
        </div>
        <button on:click|preventDefault={() => addToBag(product)} class="add-to-cart">
            <!--<img src="../../static/images/shopping-bag.svg" alt="Shopping Bag"/>-->
            <h6>Add to Bag</h6>
        </button>
    </div>
</a>

<!--<script>
    import { addToBag } from '$lib/stores/cart.svelte';
    export let id, item_name, price, image;
    const product = { id, item_name, price, image };
</script>

<a class="card-link" href={`/shop/${id}`}>
    <div class="product-card">
        <img src={`../../static/${image}`} alt="{item_name}" />
        <div class="product-info">
            <h4>{item_name}</h4>
            <p>{price}</p>
        </div>
        <button on:click|preventDefault={() => addToBag(product)} class="add-to-cart">
            <img src="/images/shopping-bag.png" alt="Shopping Bag"/>
            <h6>Add to Bag</h6>
        </button>
    </div>
</a>-->