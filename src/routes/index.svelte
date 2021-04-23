<script>
	import { companies } from '../data/companies';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<table>
	<thead><td>Name</td><</thead>
	{#each companies as item}
		<tr>
			<td>{item.name}</td>
			<td>{item.}</td>
			<td>{item.name}</td>
			<td>{item.name}</td>
			<td />
			<td />
			<td />
		</tr>
	{/each}
</table>
