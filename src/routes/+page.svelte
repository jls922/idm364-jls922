<script>
    import { getContext } from 'svelte'

    let { data } = $props();
    let cart = getContext('cart')
    
    let products = $derived(data.products || [])
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
  <div class="max-w-7xl mx-auto px-4 py-8">

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredProducts as product}
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="relative">
            <a href="/products/{product.id}">
              <img 
                src={product.image_url} 
                alt={product.name}
                class="w-full h-64 object-cover"
              />
            </a>
            <button
              onclick={(e) => {
                e.stopPropagation()
                wishlist.toggle(product.id)
              }}
              class="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-red-50 transition"
            >
              <Heart 
                class="w-5 h-5 {wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}"
              />
            </button>
            <div class="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {product.category}
            </div>
          </div>

          <div class="p-5">
            <div class="flex items-start justify-between mb-2">
              <div>
                <h3 class="font-bold text-lg text-gray-800">{product.name}</h3>
                <p class="text-sm text-gray-500">{product.brand}</p>
              </div>
              <div class="flex items-center gap-1">
                <Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span class="text-sm font-semibold">{product.rating}</span>
              </div>
            </div>

            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-blue-600">${product.price}</span>
              <a
                href="/products/{product.id}"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View Details
              </a>
            </div>

            <p class="text-xs text-gray-500 mt-2">
              {product.stock} in stock
            </p>
          </div>
        </div>
      {/each}
    </div>

    {#if filteredProducts.length === 0}
      <div class="text-center py-16">
        <p class="text-gray-500 text-lg">No products found</p>
      </div>
    {/if}
  </div>
</div>

<!-- <ul>
  {#each data.instruments as instrument}
    <li>{instrument.name}</li>
  {/each}
</ul> -->