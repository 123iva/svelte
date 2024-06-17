import { supabase } from '$lib/supabase';

export async function POST({ request }) {
    const rabbit = await request.json();
    console.log(rabbit);
    if (rabbit.name[0] !== 'J') {
        return new Response('I only like Rabbits that starts with a J', { status: 400 });
    }

    const { data, error } = await supabase.from('rabbits').insert([rabbit]).select();

    return new Response(JSON.stringify(data));
}
