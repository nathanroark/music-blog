<script lang="ts">
	//import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import PostCard from './PostCard.svelte';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<PostCard data={post} />
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}
</style>
