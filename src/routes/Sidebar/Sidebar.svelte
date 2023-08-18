<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import GenreSelect from './GenreSelect.svelte';

	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: sortMethod = query.get('sort') || 'Post';
	$: filterMethod = query.get('filter') || 'some';

	let selectedSortMethod = sortMethod;

	const sortMethods = [
		'Post',
		'Post Reverse',
		'Artist',
		'Artist Reverse',
		'Release',
		'Release Reverse'
	];

	function setSortMethod() {
		query.set('sort', selectedSortMethod);
		goto(`?${query.toString()}`);
	}

	function setFilterMethod(newFilterMethod: string) {
		query.set('filter', newFilterMethod);
		goto(`?${query.toString()}`);
	}
</script>

<div class="p-12 space-y-6">
	<div>
		<label class="label">
			<h4 class="h4">Sort Method</h4>
			<select
				class="w-full flex justify-between p-2 rounded-3xl bg-surface-700 hover:bg-surface-600 text-base items-center"
				bind:value={selectedSortMethod}
				on:change={setSortMethod}
			>
				{#each sortMethods as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</label>
	</div>
	<div class="flex flex-col">
		<h4 class="h4">Genre Filter Method</h4>
		<RadioGroup
			class="w-fit border-secondary-500"
			active="variant-filled-primary"
			hover="hover:variant-soft-primary"
		>
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
