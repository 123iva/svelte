<script>
	import { supabase } from '$lib/supabase';

	let promise = supabase.from('countries').select();
</script>

<div>{JSON.stringify(promise)}</div>

{#await promise}
	<div><span class="loading loading-spinner loading-xs" /></div>
{:then result}
	<div>{JSON.stringify(result)}</div>
	{#each result.data as country}
		<div>
			<li>{country.name}</li>
		</div>
	{/each}
{/await}
