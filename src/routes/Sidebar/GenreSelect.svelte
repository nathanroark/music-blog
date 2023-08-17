<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { rawGenreList } from './utils';

	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: queryGenres =
		query
			.get('genres')
			?.split(',')
			.filter((x) => x) ||
		[] ||
		[];
	$: currentGenres = queryGenres.length === 0 ? [] : queryGenres;
	$: availableGenres = rawGenreList.filter((genre) => !currentGenres.includes(genre));

	function handleAddGenre(newGenre: string) {
		query.set('genres', [...currentGenres, newGenre].join(','));
		goto(`?${query.toString()}`);
	}

	function handleRemoveGenre(oldGenre: string) {
		query.set('genres', currentGenres.filter((genre) => genre !== oldGenre).join(','));
		goto(`?${query.toString()}`);
	}
</script>

{#if currentGenres.length != 0}
	<h2 class="text-lg">Current Genres</h2>
	<ul
		class="w-full border-secondary-500 border rounded-md overflow-y-auto max-h-[32rem] bg-zinc-900
		p-2"
	>
		{#each currentGenres as item}
			<li class="w-full flex justify-between inset-2">
				<button class="p-2 hover:bg-primary-500 w-full" on:click={() => handleRemoveGenre(item)}
					>{item}
				</button>
			</li>
		{/each}
	</ul>
{/if}

<h2 class="text-lg">Available Genres</h2>
<ul
	class="w-full border-secondary-500 border rounded-md overflow-y-auto max-h-[32rem] bg-zinc-900 p-2"
>
	{#each availableGenres as item}
		<li class="w-full flex justify-between inset-2">
			<button class="p-2 hover:bg-primary-500 w-full" on:click={() => handleAddGenre(item)}
				>{item}
			</button>
		</li>
	{/each}
</ul>
