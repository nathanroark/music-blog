<script lang="ts">
	import * as config from '$lib/config';
	import AlbumView from './AlbumView.svelte';
	import Navbar from './Navbar.svelte';
	export let data;
	$: posts = data.posts;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<Navbar bind:posts />
	<div class="flex justify-center items-center flex-col pt-[3rem]">
		<AlbumView {posts} />
	</div>
</section>
