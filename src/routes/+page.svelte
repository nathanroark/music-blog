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
	<div class="flex justify-center items-center flex-col pt-[3rem]">
		<div class="flex justify-center">
			<div class="container flex flex-col items-center justify-center gap-12 px-4 py-16">
				<ul class="grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{#each data.posts as post}
						<PostCard data={post} />
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
