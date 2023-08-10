<script lang="ts">
	import type { Post } from '$lib/types';
	export let data: Post;
</script>

<a
	class="group flex flex-col justify-between bg-[#1e1e1f] hover:bg-[#24242a]
    rounded-lg text-white gap-2 lg:gap-4 p-2 lg:p-3 hover:scale-105 transform transition-all duration-300 ease-in-out"
	href={data.slug}
>
	<div class="overflow-hidden">
		<img
			src={data.cover_art_url}
			alt={data.album}
			width={512}
			height={512}
			class="relative transform transition-all duration-500 ease-in-out"
		/>
	</div>
	<div class="text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] font-bold gap-2 p-2">
		<h3 class="py-1 truncate">{data.album}</h3>
		<h4 class="text-opacity-50 text-white">{data.artist}</h4>
	</div>
</a>
