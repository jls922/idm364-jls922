import { writable } from 'svelte/store';

export const bag = writable([]);
export const latestOrder = writable([]);

export function addToBag(product) {
    bag.update(items => {
    const existing = items.find(item => item.id === product.id);
    if (existing) {
        return items.map(item =>
        item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }
    return [...items, { ...product, quantity: 1 }];
    });
}

export function removeFromBag(productId) {
    bag.update(items => {
    const existing = items.find(item => item.id === productId);
    if (existing && existing.quantity > 1) {
        return items.map(item =>
        item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
    }
    return items.filter(item => item.id !== productId);
    });
}

export function deleteFromBag(productId) {
    bag.update(items => items.filter(item => item.id !== productId));
}

export function clearBag() {
    bag.set([]);
}
/*import { writable } from 'svelte/store'

function createCartStore() {
  const { subscribe, set, update } = writable([])

  return {
    subscribe,
    addItem: (product, quantity = 1) => {
      update(items => {
        const existingItem = items.find(item => item.id === product.id)
        
        if (existingItem) {
          return items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        }
        
        return [...items, { ...product, quantity }]
      })
    },
    removeItem: (productId) => {
      update(items => items.filter(item => item.id !== productId))
    },
    updateQuantity: (productId, quantity) => {
      update(items =>
        items.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      )
    },
    clearCart: () => set([])
  }
}

export const cart = createCartStore()*/
/*export function createCartStore() {
  let items = $state([])
  let initialized = $state(false)

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('solestep_cart')
    if (saved) {
      items = JSON.parse(saved)
    }
    initialized = true
  }

  $effect(() => {
    if (initialized && typeof window !== 'undefined') {
      localStorage.setItem('solestep_cart', JSON.stringify(items))
    }
  })

  return {
    get items() { return items },
    get count() { return items.reduce((sum, item) => sum + item.quantity, 0) },
    get total() { return items.reduce((sum, item) => sum + (item.price * item.quantity), 0) },
    
    add(product, size, color, quantity = 1) {
      const existing = items.find(
        item => item.id === product.id && item.size === size && item.color === color
      )
      
      if (existing) {
        existing.quantity += quantity
      } else {
        items.push({ ...product, size, color, quantity })
      }
      items = [...items] // Trigger reactivity
    },
    
    updateQuantity(index, delta) {
      items[index].quantity = Math.max(1, items[index].quantity + delta)
      items = [...items]
    },
    
    remove(index) {
      items.splice(index, 1)
      items = [...items]
    },
    
    clear() {
      items = []
    }
  }
}*/