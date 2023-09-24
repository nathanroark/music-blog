<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import GenreSelect from './GenreSelect.svelte';
	import SortSelect from './SortSelect.svelte';
	import FilterMethod from './FilterMethod.svelte';

	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: filterMethod = query.get('filter') || 'some';

	function setFilterMethod(newFilterMethod: string) {
		query.set('filter', newFilterMethod);
		goto(`?${query.toString()}`);
	}
</script>

<fieldset>
	<!-- <legend>Filter Method</legend> -->

	<div>
		<input
			bind:group={filterMethod}
			type="radio"
			id="some"
			name="flavor"
			value="some"
			on:change={() => setFilterMethod('some')}
		/>
		<label for="some">Some</label>
	</div>
	<div>
		<input
			bind:group={filterMethod}
			value="every"
			on:change={() => setFilterMethod('every')}
			type="radio"
			id="every"
			name="flavor"
		/>
		<label for="every">Every</label>
	</div>
</fieldset>

<style>
	fieldset {
		padding: 10px;
		padding-right: 4rem;
		border-radius: 20px;
		background-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		display: inline-block;
		border: none;
	}

	/* legend {
		font-size: 24px;
		font-weight: bold;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(2px);
		border-radius: 20px;
		padding: 10px 20px;
		color: white;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	} */

	input[type='radio'] {
		appearance: none;
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		border: 1px solid #fff;
		border-radius: 50%;
		margin-right: 10px;
		background-color: transparent;
		position: relative;
		top: 6px;
	}

	input[type='radio']:checked::before {
		content: '';
		display: block;
		width: 12px;
		height: 12px;
		background-color: #ca8489;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: appear 0.8s;
	}

	label {
		font-size: 24px;
		font-weight: bold;
		color: #fff;
	}

	label:hover {
		cursor: pointer;
		color: var(--color-theme-2);
	}

	div {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	@keyframes appear {
		0% {
			transform: translate(-50%, -50%) scale(0);
			background-color: #fff;
		}
		45% {
			transform: translate(-50%, -50%) scale(1.6);
			background-color: #64aedf;
		}
		50% {
			transform: translate(-50%, -50%) scale(1.7);
			background-color: #ad97b3;
		}
		55% {
			transform: translate(-50%, -50%) scale(1.6);
		}
		100% {
			transform: translate(-50%, -50%) scale(1);
			background-color: #ca8489;
		}
	}
</style>
