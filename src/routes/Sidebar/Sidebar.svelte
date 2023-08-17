<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import GenreSelect from './GenreSelect.svelte';

	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: sortMethod = query.get('sort') || 'Post';
	$: filterMethod = query.get('filter') || 'some';

	const filterMethods = ['some', 'every'];

	const sortMethods = [
		'Post',
		'Post Reverse',
		'Artist',
		'Artist Reverse',
		'Release',
		'Release Reverse'
	];

	function setSortMethod(newSortMethod: string) {
		query.set('sort', newSortMethod);
		goto(`?${query.toString()}`);
	}

	function setFilterMethod(newFilterMethod: string) {
		query.set('filter', newFilterMethod);
		goto(`?${query.toString()}`);
	}
</script>

<div>
	<div class="top">
		<div class="corner">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="sveltekit" />
			</a>
		</div>
		<div class="corner">
			<a href="https://github.com/sveltejs/kit">
				<img src={github} alt="github" />
			</a>
		</div>
	</div>

	<div class="p-12 space-y-6">
		<h2 class="text-lg">Sort Method</h2>
		<ul
			class="w-full rounded-md border border-secondary-500 overflow-y-auto max-h-[32rem] bg-zinc-900 p-2"
		>
			{#each sortMethods as item}
				<li class="w-full flex justify-between inset-2">
					<button class="p-2 hover:bg-primary-500 w-full" on:click={() => setSortMethod(item)}
						>{item}
					</button>
				</li>
			{/each}
		</ul>
		<div class="flex flex-col">
			<span class="text-lg">Filter Method</span>
			<RadioGroup class="w-fit" active="variant-filled-primary" hover="hover:variant-soft-primary">
				<RadioItem
					bind:group={filterMethod}
					name="justify"
					on:change={() => setFilterMethod('some')}
					value="some">some</RadioItem
				>
				<RadioItem
					bind:group={filterMethod}
					name="justify"
					on:change={() => setFilterMethod('every')}
					value="every">every</RadioItem
				>
			</RadioGroup>
		</div>
		<GenreSelect />
	</div>
</div>

<style>
	.top {
		display: flex;
		justify-content: flex-end;
		align-items: right;
		right: 0;
	}

	.corner {
		width: 2em;
		height: 2em;
		margin: 4px;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
