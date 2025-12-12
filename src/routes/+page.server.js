import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("products").select();
    
    // Add the path prefix to each image
    const productsWithPaths = data?.map(product => ({
        ...product,
        image: product.image?.startsWith('images/') || product.image?.startsWith('/') 
            ? product.image 
            : `images/frogs/${product.image}`
    })) ?? [];
    
    return {
        products: productsWithPaths,
    };
}