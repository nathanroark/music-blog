<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { genreOptions } from './utils';
	import { Autocomplete } from '@skeletonlabs/skeleton';

	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: queryGenres =
		query
			.get('genres')
			?.split(',')
			.filter((x) => x) ||
		[] ||
		[];
	$: inputChipList = queryGenres.length === 0 ? [] : queryGenres;
	let inputChip = '';

	function handleRemoveGenre(oldGenre: string) {
		query.set('genres', inputChipList.filter((genre) => genre !== oldGenre).join(','));
		goto(`?${query.toString()}`);
	}

	function onInputChipSelect(event: any): void {
		query.set('genres', [...inputChipList, event.detail.value].join(','));
		goto(`?${query.toString()}`);
		inputChip = ''; // i don't think this will ever get hit
	}

	$: open = false;
</script>

<section class="space-y-2">
	<h2 class="h4">Genres Filter</h2>
	<div class="text-token w-full max-w-sm space-y-2">
		<div class="flex flex-wrap gap-2">
			{#if inputChipList.length === 0}
				<p>No genres selected</p>
			{/if}
			{#each inputChipList as item}
				<button
					class="chip bg-surface-600 hover:bg-primary-600 hover:text-token text-base"
					on:click={() => handleRemoveGenre(item)}
					><span>{item}</span><iconify-icon icon="tabler:x" /></button
				>
			{/each}
			<button
				class="w-full flex justify-between p-2 rounded-3xl bg-surface-700 hover:bg-surface-600 text-base items-center"
				on:click={() => (open = !open)}
				>Genre List<iconify-icon icon="zondicons:cheveron-down" /></button
			>
			{#if inputChipList.length < 4 && open}
				<div
					class="w-full max-w-sm max-h-48 overflow-y-auto bg-surface-800 border border-surface-400"
					tabindex="-1"
				>
					<Autocomplete
						bind:input={inputChip}
						options={genreOptions}
						denylist={inputChipList}
						on:selection={onInputChipSelect}
					/>
				</div>
			{/if}
		</div>
	</div>
</section>
