import { PUBLIC_SUPABASE_TABLE_ } from "$env/static/public";
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function GET() {
  const { data, error } = await supabase.from(PUBLIC_SUPABASE_TABLE_).select('*');

  if ( error ) {
    return json({ error: error.message }, { status: 500 })
  }

  return json(data, { status: 200 });
};