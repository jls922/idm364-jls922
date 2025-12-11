import { supabase } from '$lib/supabaseClient'

export async function load() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id')
  
  if (error) {
    console.error('Error loading products:', error)
    return { products: [] }
  }
  
  return { products }
}