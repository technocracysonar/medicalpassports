<script>
	import { companies } from '../data/companies';
	import { industry } from '../data/companies';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<table>
	<thead
		><tr><th>Name</th><th>HQ Location</th><th>Industry</th><th>Optional Benefits</th></tr></thead
	>
	{#each companies as item}
		<tr>
			<td>{item.name}</td>
			<td>{item.hqLocation.name}</td>
			<td> {industry[item.industry]}</td>
			<td
				><span>{item.optionalBenefits}</span>
				<a target="_blank" href={item.optionalBenefitsSources[0]}>Source 1</a><a
					target="_blank"
					href={item.optionalBenefitsSources[1]}>Source 2</a
				></td
			>
		</tr>
	{/each}
</table>
