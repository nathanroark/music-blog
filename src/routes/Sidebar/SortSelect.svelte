<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: sortMethod = query.get('sort') || 'Post';

	const sortMethods = [
		'Post',
		'Post Reverse',
		'Artist',
		'Artist Reverse',
		'Release',
		'Release Reverse'
	];

	function setSortMethod() {
		isExpanded = !isExpanded;
		query.set('sort', selectedSortMethod);
		goto(`?${query.toString()}`);
	}

	let selectedSortMethod = sortMethod;

	let isExpanded = false;

	function clickHandler() {
		isExpanded = !isExpanded;
	}
</script>

<nav>
	<button on:click={clickHandler} class="sort-button"
		>{sortMethod}<iconify-icon width="28" icon="zondicons:cheveron-down" /></button
	>
	{#if isExpanded}
		<ul transition:slide class="no-scrollbar">
			{#each sortMethods as method}
				<li>
					<button
						class="list-button"
						class:active={method === sortMethod}
						on:click={() => {
							selectedSortMethod = method;
							setSortMethod();
						}}
					>
						{method}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	.sort-button {
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
		width: 100%;
		margin: 0;
		overflow: auto;
		padding: 0;
		outline: 2px solid black;
	}
	li {
		font-size: 1.2rem;
		width: 100%;
		line-height: 2rem;
		background: var(--color-bg-0);
		padding-left: 1rem;
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
