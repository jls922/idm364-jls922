import { supabase } from '$lib/supabaseClient'
import { json } from '@sveltejs/kit'

export async function GET() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id')
  
  if (error) {
    return json({ error: error.message }, { status: 500 })
  }
  
  return json(products)
}