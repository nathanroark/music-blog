<script lang="ts">
	import type { Post } from '$lib/types';
	import PostCard from './PostCard.svelte';
	export let posts: Post[];
</script>

<div class="container flex flex-col items-center justify-center gap-12 px-4 py-16">
	<ul class="grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each posts as post}
			<PostCard data={post} />
		{/each}
	</ul>
</div>
