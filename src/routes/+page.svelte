<script>
	import { supabase } from '$lib/supabase';

	let promise = supabase.from('countries').select();
</script>

<div>{JSON.stringify(promise)}</div>

{#await promise}
	<div>...loading</div>
{:then result}
	<div>{JSON.stringify(result)}</div>
{/await}
