<script lang="ts">
	import GenreSelect from './GenreSelect.svelte';
	import SortSelect from './SortSelect.svelte';
	import FilterMethod from './FilterMethod.svelte';
</script>

<div class="p-12 space-y-6">
	<div>
		<h4 class="h4">Sort Method</h4>
		<SortSelect />
	</div>
	<div>
		<h4 class="h4">Genre Filter</h4>
		<GenreSelect />
	</div>
	<div>
		<h4 class="h4">Genre Filter Method</h4>
		<FilterMethod />
	</div>
</div>

<style>
	.h4 {
		font-size: 1.5rem;
		font-weight: 600;
	}
</style>
