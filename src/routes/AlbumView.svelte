<script lang="ts">
	import type { Post } from '$lib/types';
	import PostCard from './PostCard.svelte';
	export let posts: Post[];
</script>

<div class=" flex flex-col items-center justify-center gap-12 px-8 py-16">
	<ul
		class="grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-3
		lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7"
	>
		{#each posts as post}
			<PostCard data={post} />
		{/each}
	</ul>
</div>
