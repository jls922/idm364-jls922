<script>
  import { Heart, Star, Minus, Plus } from '@lucide/svelte'
  import { getContext } from 'svelte'
  import { goto } from '$app/navigation'
  
  let { data } = $props()
  let cart = getContext('cart')
  
  let product = $derived(data.product)
  let selectedSize = $state('')
  let selectedColor = $state('')
  let quantity = $state(1)
  
  function addToCart() {
    /*if (!selectedSize || !selectedColor) {
      alert('Please select size and color')
      return
    }*/
    
    cart.add(product, quantity) /* selectedSize, selectedColor,*/
    alert('Added to cart!')
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
  <div class="max-w-6xl mx-auto px-4 py-8">
    <a
      href="/"
      class="mb-6 text-blue-600 hover:text-blue-700 flex items-center gap-2 inline-block"
    >
      ← Back to Products
    </a>

    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="grid md:grid-cols-2 gap-8 p-8">
        <!-- Product Image -->
        <div class="relative">
          <img
            src={product.image_url}
            alt={product.name}
            class="w-full h-96 object-cover rounded-xl"
          />
        </div>

        <!-- Product Info -->
        <div class="flex flex-col">
          <div class="mb-4">
            <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              {product.category}
            </span>
          </div>

          <h1 class="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p class="text-gray-600 mb-4">{product.brand}</p>

          <div class="flex items-center gap-2 mb-6">
            <div class="flex items-center gap-1">
              {#each Array(5) as _, i}
                <Star
                  class="w-5 h-5 {i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}"
                />
              {/each}
            </div>
            <span class="text-gray-600">({product.rating})</span>
          </div>

          <p class="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          <div class="text-4xl font-bold text-blue-600 mb-6">${product.price}</div>

          <!-- Quantity -->
          <div class="mb-6">
            <label for="quantity" class="block text-sm font-semibold text-gray-700 mb-3">Quantity</label>
            <div class="flex items-center gap-3">
              <button
                onclick={() => quantity = Math.max(1, quantity - 1)}
                class="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50"
                aria-label="Decrease quantity"
              >
                <Minus class="w-4 h-4" />
              </button>
              <input
                id="quantity"
                type="number"
                bind:value={quantity}
                min="1"
                max={product.stock}
                class="text-xl font-semibold w-16 text-center border-2 border-gray-200 rounded-lg"
                aria-label="Product quantity"
              />
              <button
                onclick={() => quantity = Math.min(product.stock, quantity + 1)}
                class="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50"
                aria-label="Increase quantity"
              >
                <Plus class="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onclick={addToCart}
            class="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg"
          >
            Add to Cart
          </button>

          <p class="text-sm text-gray-500 mt-4 text-center">
            {product.stock} items available
          </p>
        </div>
      </div>
    </div>
  </div>
</div>