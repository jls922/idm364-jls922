<script>
	import favicon from '$lib/assets/favicon.svg';
	import { createCartStore } from '$lib/stores/cart.svelte.js'

	let cart = createCartStore()
	
	import { setContext } from 'svelte'
  	setContext('cart', cart)
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Header -->
  <header class="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <a href="/" class="flex items-center gap-2">
          <Package class="w-8 h-8 text-blue-400" />
          <h1 class="text-2xl font-bold">SoleStep</h1>
        </a>

        <nav class="hidden md:flex gap-8">
          <a href="/" class="hover:text-blue-400 transition">Products</a>
          <a href="/api/products" class="hover:text-blue-400 transition">API</a>
        </nav>

        <div class="flex items-center gap-4">
          <a href="/cart" class="relative hover:text-blue-400 transition">
            <ShoppingCart class="w-6 h-6" />
            {#if cart.count > 0}
              <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.count}
              </span>
            {/if}
          </a>
        </div>
      </div>
    </div>
  </header>

	{@render children?.()}
</div>
