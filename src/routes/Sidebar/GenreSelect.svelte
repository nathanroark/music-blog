<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { genreOptions } from './utils';
	import { Autocomplete, InputChip, CodeBlock, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';
	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: queryGenres =
		query
			.get('genres')
			?.split(',')
			.filter((x) => x) ||
		[] ||
		[];
	$: inputChipList = queryGenres.length === 0 ? [] : queryGenres;

	//	function handleAddGenre(newGenre: string) {
	//		query.set('genres', [...currentGenres, newGenre].join(','));
	//		goto(`?${query.toString()}`);
	//	}
	//
	function handleRemoveGenre(oldGenre: string) {
		query.set('genres', inputChipList.filter((genre) => genre !== oldGenre).join(','));
		goto(`?${query.toString()}`);
	}
	//
	//	function handleChange(newGenre: string) {
	//		query.set('genres', newGenre);
	//		goto(`?${query.toString()}`);
	//	}
	// Input Chip
	let inputChip = '';
	function onInputChipSelect(event: any): void {
		if (inputChipList.includes(event.detail.value) === false) {
			query.set('genres', [...inputChipList, event.detail.value].join(','));
			inputChip = '';
			goto(`?${query.toString()}`);
		}
	}
</script>

<section class="space-y-4">
	<h2 class="h4">Genres List</h2>
	<div class="text-token w-full max-w-sm space-y-2">
		<div class="flex flex-wrap gap-2">
			{#each inputChipList as item}
				<button
					class="chip variant-filled hover:bg-primary-600 hover:text-token text-base"
					on:click={() => handleRemoveGenre(item)}>{item}</button
				>
			{/each}
			<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto" tabindex="-1">
				<Autocomplete
					bind:input={inputChip}
					options={genreOptions}
					denylist={inputChipList}
					on:selection={onInputChipSelect}
				/>
			</div>
		</div>
	</div>
</section>
<!--
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
<ul class=" border-secondary-500 border rounded-md overflow-y-auto max-h-[32rem] bg-zinc-900 p-2">
	{#each availableGenres as item}
		<li class="flex justify-between inset-2">
			<button class="p-2 hover:bg-primary-500 w-full" on:click={() => handleAddGenre(item)}
				>{item}
			</button>
		</li>
	{/each}
</ul>-->
