<script lang="ts">
	import { page } from '$app/stores';
	import Sidebar from './Sidebar/Sidebar.svelte';
	$: homepage = $page.url.pathname === '/';
	$: open = homepage ? false : false;
</script>

<header
	class="z-50 fixed pl-2 top-0 items-center border-b border-zinc-600 bg-black flex h-[3rem] w-full text-2xl text-neutral-100"
>
	{#if homepage}
		<button
			class="togglebutton top-0 left-0 p-4 text-gray-100 hover:text-gray-300 cursor-pointer mr-4 border-none focus:outline-none"
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
	<a href="/" class="font-bold text-lg hover:text-primary-500 sm:text-[1.5rem]">
		Nathan&apos;s <span>music</span> blog
	</a>
</header>

<aside class=" min-w-fit h-full bg-black border-r-2 shadow-lg border-zinc-500" class:open>
	<Sidebar />
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 49;
	}

	.togglebutton {
		z-index: 999;
	}

	/*a:hover {
		color: var(--color-theme-1);
	}*/
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
