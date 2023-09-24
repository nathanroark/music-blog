<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { genreOptions } from './utils';

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

	$: availableGenres = genreOptions.filter((genre) => !inputChipList.includes(genre.label));

	function handleRemoveGenre(oldGenre: string) {
		query.set('genres', inputChipList.filter((genre) => genre !== oldGenre).join(','));
		goto(`?${query.toString()}`);
	}

	function onInputChipSelect(newGenre: string) {
		query.set('genres', [...inputChipList, newGenre].join(','));
		goto(`?${query.toString()}`);
		inputChip = ''; // i don't think this will ever get hit
	}

	import { slide } from 'svelte/transition';

	let isExpanded = false;

	function clickHandler() {
		isExpanded = !isExpanded;
	}
</script>

<nav>
	{#if inputChipList.length === 0}
		<p>No genres selected</p>
	{/if}
	<div class="">
		{#each inputChipList as item}
		<button
			class="chip bg-surface-600  hover:bg-red-700 text-base duration-100 ease-in m-1 p-1 group"
			on:click={() => handleRemoveGenre(item)}
			><span class="group-hover:line-through">{item}</span>
			<div class="chip-icon">x</div>
			<!-- <iconify-icon class="bg-blue-500" width="20" icon="tabler:x" /> -->
			</button>
	{/each}
	</div>
	<button on:click={clickHandler} class="dropdown-button"
		>Genre Select<iconify-icon icon="zondicons:cheveron-down" /></button
	>
	{#if isExpanded}
		<ul transition:slide class="no-scrollbar">
			{#each availableGenres as genre}
				<li>
					<button class="list-button" on:click={() => onInputChipSelect(genre.label)}>
						{genre.label}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
.chip {
  display: inline-block;
  /* background: $md-chip-color; */
  padding: 4px 8px;
  border-radius: 32px;
  font-size: 16px;
  &.md-chip-hover:hover {
    background: #ccc;
  }
	cursor: pointer;
}

.chip-icon {
  display: block;
  float: left;
  /* background: #282828; */
	/* opacity: 0.5; */
	/* height: 1.2rem; */
  width: 1.5rem;
  border-radius: 50%;
  text-align: center;
  color: white;
  margin: 0 8px 0 -8px;
}

	.dropdown-button {
		background: var(--color-theme-1);
		border: 0;
		width: 100%;
		color: black;
		cursor: pointer;
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: space-between;
	}
	.list-button {
		width: 100%;
		overflow-x: hidden;
		text-align: left;
	}
	ul {
		list-style: none;
		max-height: 16rem;
		margin: 0;
		overflow: auto;
		padding: 0;
		text-indent: 10px;
		border: 2px solid black;
	}
	li {
		font-size: 1.2rem;
		line-height: 2rem;
		background: var(--color-bg-0);
		cursor: pointer;
	}
	li:hover {
		background: var(--color-bg-2);
	}
	li:nth-child(even) {
		background: var(--color-bg-1);
	}
	li:nth-child(even):hover {
		background: var(--color-bg-2);
	}
</style>
