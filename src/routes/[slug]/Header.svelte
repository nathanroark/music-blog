<script>
	import { page } from '$app/stores';
	$: homepage = $page.url.pathname === '/';
</script>

<header
	class="z-50 fixed pl-2 top-0 items-center border-b border-zinc-600 bg-black flex h-[3rem] w-full text-2xl text-neutral-100"
>
	{#if !homepage}
		<a href="/" class="font-bold text-lg sm:text-[1.5rem]">
			Nathan&apos;s <span>music</span> blog
		</a>
	{/if}
</header>

<style>
	a:hover {
		color: var(--color-theme-1);
	}
</style>
