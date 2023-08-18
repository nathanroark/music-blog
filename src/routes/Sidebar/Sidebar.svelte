<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
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

<div class="p-12 space-y-6">
	<div>
		<h2 class="text-lg">Sort Method</h2>

		<select class="select" size="4" value="1">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
		</select>

		<ul
			class="rounded-md border border-secondary-500 overflow-y-auto max-h-[32rem] bg-zinc-900 p-2"
		>
			{#each sortMethods as item}
				<li class="flex justify-between inset-2">
					<button class="w-full p-2 hover:bg-primary-500" on:click={() => setSortMethod(item)}
						>{item}
					</button>
				</li>
			{/each}
		</ul>
	</div>
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
	<div>
		<GenreSelect />
	</div>
</div>
