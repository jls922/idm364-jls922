<script>
    let { data } = $props();
    const product = data.product;
    import { addToBag } from '$lib/stores/cart.svelte.js';
    
    let quantity = $state(1);
    
    function decrementQuantity() {
        if (quantity > 1) {
            quantity--;
        }
    }
    
    function incrementQuantity() {
        quantity++;
    }
    
    function handleAddToBag() {
        for (let i = 0; i < quantity; i++) {
            addToBag(product);
        }
    }
</script>

<div class="product-page">
    <img class="product-image" src="/{product.image}" alt={product.item_name}/>
    <div class="product-content">
        <h1>{product.item_name}</h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <p>Size: {product.size}</p>
        <p>Weight: {product.weight}</p>
        
        <div class="quantity-selector">
            <label for="quantity">Quantity:</label>
            <div class="quantity-controls">
                <button onclick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onclick={incrementQuantity}>+</button>
            </div>
        </div>
        
        <button class="add-to-bag" onclick={handleAddToBag}>
            <h6>Add to Bag</h6>
        </button>
    </div>
</div>