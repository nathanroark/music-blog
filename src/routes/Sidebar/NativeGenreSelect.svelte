<script>
	import { slide } from 'svelte/transition';

	let isExpanded = false;

	function clickHandler() {
		isExpanded = !isExpanded;
	}
</script>

<nav>
	<button on:click={clickHandler}>Menu</button>
	{#if isExpanded}
		<ul transition:slide>
			<li>Home</li>
			<li>About</li>
			<li>Projects</li>
			<li>Contact</li>
			<li>Home</li>
			<li>About</li>
			<li>Projects</li>
			<li>Contact</li>
			<li>Home</li>
			<li>About</li>
			<li>Projects</li>
			<li>Contact</li>
			<li>Home</li>
			<li>About</li>
			<li>Projects</li>
			<li>Contact</li>
		</ul>
	{/if}
</nav>

<style>
	button {
		background: var(--color-theme-1);
		border: 0;
		width: 100%;
		color: black;
		cursor: pointer;
		font-size: 1rem;
		padding: 0.5rem 1rem;
	}
	ul {
		list-style: none;
		max-height: 100px;
		margin: 0;
		overflow: auto;
		padding: 0;
		text-indent: 10px;
	}
	li {
		line-height: 25px;
	}
	li:nth-child(even) {
		background: var(--color-bg-1);
	}
</style>
