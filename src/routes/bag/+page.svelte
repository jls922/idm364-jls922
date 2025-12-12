<script>
    import { bag } from '$lib/stores/cart.svelte';
</script>

<main>
    <h1>Your Shopping Bag</h1>

    {#if $bag.length === 0}
        <p>Your bag is empty</p>
        <a href="/">Continue Shopping</a>
    {:else}
        <div class="bag-items">
            {#each $bag as item}
                <div class="bag-item">
                    <img src="/{item.image}" alt={item.item_name} />
                    <div class="item-details">
                        <h3>{item.item_name}</h3>
                        <p>${item.price}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="bag-total">
            <h3>Total: ${$bag.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2)}</h3>
        </div>
    {/if}
</main>