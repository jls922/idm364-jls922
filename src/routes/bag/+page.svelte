<script>
    import { bag } from '$lib/stores/cart.svelte';
</script>

<main>
    <div class="bag-page">
    <h1 class="center-text">Your Shopping Bag</h1>

    {#if $bag.length === 0}
        <p class="center-text">Your bag is empty</p>
        <div class="sad-frog">
            <img src="/images/no_item_icon.png" alt="icon of sad frog">
        </div>
        <p class="center-text">
            <a href="/">Continue Shopping</a>
        </p>
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

    </div>
</main>