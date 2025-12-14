import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { data: product } = await supabase
        .from("products")
        .select()
        .eq('id', params.id)
        .single();
    
    if (!product) {
        throw error(404, 'Product not found');
    }
    
    // Add the path prefix to the image
    const productWithPath = {
        ...product,
        image: product.image?.startsWith('images/') || product.image?.startsWith('/') 
            ? product.image 
            : `images/frogs/${product.image}`
    };
    
    return {
        product: productWithPath
    };
}