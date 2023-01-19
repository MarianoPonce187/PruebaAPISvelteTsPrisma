<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<h1>Rick And Morty</h1>

<!-- <div>
	{#each characters as character}
		<div class="card card-side bg-base-100 shadow-xl">
			<figure><img src={character.image} alt={character.name} /></figure>
			<div class="card-body">
				<h2 class="card-title">{character.name}</h2>
				<p>{character.species}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Watch</button>
				</div>
			</div>
		</div>
	{/each}
</div> -->
