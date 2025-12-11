<script>
  import { ShoppingCart, X, Minus, Plus } from 'lucide-svelte'
  import { getContext } from 'svelte'
  
  let cart = getContext('cart')
  
  let subtotal = $derived(cart.total)
  let shipping = $derived(cart.items.length > 0 ? 9.99 : 0)
  let tax = $derived(subtotal * 0.08)
  let total = $derived(subtotal + shipping + tax)
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

    {#if cart.items.length === 0}
      <div class="bg-white rounded-xl shadow-md p-12 text-center">
        <ShoppingCart class="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p class="text-gray-500 text-lg mb-6">Your cart is empty</p>
        <a
          href="/"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Continue Shopping
        </a>
      </div>
    {:else}
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          {#each cart.items as item, index}
            <div class="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <img 
                src={item.image_url} 
                alt={item.name}
                class="w-24 h-24 object-cover rounded-lg"
              />
              
              <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="font-bold text-lg">{item.name}</h3>
                    <p class="text-sm text-gray-500">
                      Size: {item.size} | Color: {item.color}
                    </p>
                  </div>
                  <button
                    onclick={() => cart.remove(index)}
                    class="text-red-500 hover:text-red-700"
                  >
                    <X class="w-5 h-5" />
                  </button>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <div class="flex items-center gap-3">
                    <button
                      onclick={() => cart.updateQuantity(index, -1)}
                      class="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus class="w-4 h-4" />
                    </button>
                    <span class="font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onclick={() => cart.updateQuantity(index, 1)}
                      class="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus class="w-4 h-4" />
                    </button>
                  </div>
                  <span class="text-xl font-bold text-blue-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 class="text-xl font-bold mb-6">Order Summary</h2>

            <div class="space-y-3 mb-6">
              <div class="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div class="border-t pt-3 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span class="text-blue-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3">
              Proceed to Checkout
            </button>

            <a
              href="/"
              class="block w-full text-center border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Continue Shopping
            </a>

            <div class="mt-6 pt-6 border-t">
              <p class="text-sm text-gray-600 text-center">
                🔒 Secure checkout powered by Not Drexel
              </p>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>