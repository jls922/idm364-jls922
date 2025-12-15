<script>
    import { bag } from '$lib/stores/cart.svelte';
    import { goto } from '$app/navigation';
    import { deleteFromBag, addToBag, removeFromBag } from '$lib/stores/cart.svelte';
</script>

<main>
    <div class="bag-page">
    <h1 class="center-text">Your Shopping Bag</h1>

    {#if $bag.length === 0}
        <p class="center-text">There are no frogs in your bag</p>
        <div class="sad-frog">
            <img src="/images/no_item_icon.png" alt="icon of sad frog">
        </div>
        <button class="add-to-bag" onclick={() => goto('/')}>
            <p class="button-link">Continue Shopping</p>
        </button>
    {:else}
        <div class="bag-items">
            {#each $bag as item}
                <div class="bag-item">
                    <img src="/{item.image}" alt={item.item_name} />
                    <div class="item-details">
                        <h3>{item.item_name}</h3>
                        <p>${item.price}</p>
                        
                        <div class="quantity-controls">
                            <button onclick={() => removeFromBag(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onclick={() => addToBag(item)}>+</button>
                        </div>

                        <button class="add-to-bag" onclick={() => deleteFromBag(item.id)}>
                            <h6>Remove from Bag</h6>
                        </button>
                    </div>
                </div>
            {/each}
        </div>

        <div class="bag-total">
            <h3>Total: ${$bag.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0).toFixed(2)}</h3>
        </div>
    {/if}

    </div>
</main>