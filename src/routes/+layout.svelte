<script lang="ts">
	import 'iconify-icon';
	import '../app.css'; // for Tailwind CSS
	import './styles.css';
	import { fly } from 'svelte/transition';
	import Sidebar from './Sidebar/Sidebar.svelte';
	import { page } from '$app/stores';

	$: homepage = $page.url.pathname === '/';
	$: open = false;
</script>

<html lang="en" class="dark">
	<div class="min-h-screen items-center justify-center bg-zinc-950 no-scrollbar">
		<header
			class="z-50 fixed pl-2 top-0 items-center border-b border-zinc-600 bg-black flex h-[3rem] w-full text-2xl text-neutral-100"
		>
			{#if homepage}
				<button
					class="togglebutton top-0 left-0 p-4 text-gray-100 hover:text-zinc-400 cursor-pointer mr-4 border-none focus:outline-none"
					class:open
					on:click={() => (open = !open)}
				>
					<svg width="32" height="24">
						<line id="top" x1="0" y1="2" x2="32" y2="2" />
						<line id="middle" x1="0" y1="12" x2="24" y2="12" />
						<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
					</svg>
				</button>
			{/if}
			<a href="/" class="font-bold text-lg hover:text-zinc-400 sm:text-[1.5rem]">
				Nathan's music blog
			</a>
		</header>
		<main class="flex">
			{#if open}
				<div class="drawer" transition:fly={{ x: '-100%' }}>
					<aside class="pt-4 h-screen w-72 lg:w-96 bg-black border-r-2 border-gray-600">
						<Sidebar />
					</aside>
				</div>
			{/if}
			<slot />
		</main>
	</div>
</html>

<style>
	/* disable the sidebar button on mobile */
	@media only screen and (max-width: 1026px) {
		.togglebutton {
			display: none;
		}
	}
	.drawer {
		top: 0;
		box-shadow: -2px 0px 6px -1px rgba(0, 0, 0, 0.1);
	}
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 49;
	}

	.togglebutton {
		z-index: 999;
	}

	.open {
		left: 0;
	}

	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentcolor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	button {
		z-index: 20;
	}

	.open svg {
		transform: scale(0.7);
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
