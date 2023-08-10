<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	let open = false;
</script>

<button
	class="toggleButton fixed top-0 left-0 p-4 text-gray-100 hover:text-gray-300 cursor-pointer mr-4 border-none focus:outline-none"
	class:open
	on:click={() => (open = !open)}
>
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="24" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>
<aside class="absolute w-1/8 h-full bg-black border-r-2 shadow-lg border-zinc-500" class:open>
	<div class="top">
		<div class="corner">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>
		<div class="corner">
			<a href="https://github.com/sveltejs/kit">
				<img src={github} alt="GitHub" />
			</a>
		</div>
	</div>

	<nav class="p-12 text-xl">
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/line-plot' ? 'page' : undefined}>
				<a href="/line-plot">Line Plot</a>
			</li>
			<li aria-current={$page.url.pathname === '/line-plot-axis' ? 'page' : undefined}>
				<a href="/line-plot-axis">Line Plot Axis</a>
			</li>
			<li aria-current={$page.url.pathname === '/force-click' ? 'page' : undefined}>
				<a href="/force-click">Force Click</a>
			</li>
			<li aria-current={$page.url.pathname === '/force-directed-graph' ? 'page' : undefined}>
				<a href="/force-directed-graph">Force Directed Graph</a>
			</li>
			<li aria-current={$page.url.pathname === '/welcome' ? 'page' : undefined}>
				<a href="/welcome">Welcome</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 49;
	}

	.toggleButton {
		z-index: 999;
	}

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

	ul {
		margin: 0;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		padding-top: 4px;
		padding-bottom: 4px;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 8px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(-8px - var(--size));
		top: calc(50% - var(--size));
		border: var(--size) solid transparent;
		/* border-top: var(--size) solid var(--color-theme-1); */
		border-left: var(--size) solid var(--color-theme-1);
	}
	a:hover {
		color: var(--color-theme-1);
	}
	.open {
		left: 0;
	}

	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
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
