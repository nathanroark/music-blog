<script lang="ts">
	//	import { formatDate } from '$lib/utils';
	// import Header from './Header.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.album}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.album} />
</svelte:head>

<article class=" w-full h-full">
	<!-- <Header /> -->
	<div class="pt-[3rem]">
		<div
			class="fixed p-3 bg-black md:bg-inherit w-full h-[12rem] md:w-[18rem] md:h-screen md:max-w-xs flex flex-col justify-between md:border-r md:border-zinc-600"
		>
			<div
				class="flex flex-row justify-evenly items-center md:justify-normal md:flex-col gap-4 h-[12rem] pb-5 w-full"
			>
				<img
					src={data.meta.cover_art_url}
					alt=""
					width={256}
					height={256}
					class="h-full w-fit md:h-fit md:w-full pr-2"
				/>
				<div
					class="text-base sm:text-[2rem] md:text-[1.2rem]
					font-bold text-white flex flex-col justify-evenly gap-4"
				>
					<h3 class="max-w-lg">{data.meta.album}</h3>
					<h2 class="text-opacity-75 text-white">{data.meta.artist}</h2>
					<h4 class="text-sm text-white text-opacity-50 font-bold">
						{data.meta.release_date}
					</h4>
				</div>
			</div>
			<div class="pb-16 pl-4 invisible flex flex-col md:visible">
				<div class="text-2xl font-bold text-opacity-75">
					Genres:{' '}
				</div>
				{#each data.meta.genres as genre}
					<span class="text-lg text-opacity-50 pl-2">{genre}</span>
				{/each}
			</div>
		</div>
		<div
			class="flex justify-center pt-[12rem] md:w-[calc(100%-18rem)] md:pt-[2rem] md:float-right px-2"
		>
			<article class="prose prose-invert md:prose-md md:prose-lg xl:prose-xl 2xl:prose-2xl">
				<svelte:component this={data.content} />
			</article>
		</div>
	</div>
</article>
