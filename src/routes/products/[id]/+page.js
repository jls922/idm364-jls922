import { supabase } from '$lib/supabaseClient'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const { data: product, error: err } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single()
  
  if (err || !product) {
    throw error(404, 'Product not found')
  }
  
  return { product }
}