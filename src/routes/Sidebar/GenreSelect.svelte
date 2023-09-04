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
	{#each inputChipList as item}
		<button
			class="chip bg-surface-600 hover:bg-primary-600 hover:text-token text-base"
			on:click={() => handleRemoveGenre(item)}
			><span>{item}</span><iconify-icon icon="tabler:x" /></button
		>
	{/each}
	<button on:click={clickHandler} class="dropdown-button"
		>Genre Select<iconify-icon width="28" icon="zondicons:cheveron-down" /></button
	>
	{#if isExpanded}
		<ul transition:slide class="no-scrollbar">
			{#each genreOptions as genre}
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
