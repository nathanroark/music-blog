<script lang="ts">
	import type { Post } from '$lib/types';
	export let data: Post;
</script>

<a class="group card max-w-xs rounded-lg gap-2 lg:gap-4 p-2 lg:p-3" href={data.slug}>
	<img src={data.cover_art_url} alt={data.album} width={512} height={512} />
	<div class="info">
		<h3 class="album-name">{data.album}</h3>
		<h4 class="album-artist">{data.artist}</h4>
	</div>
</a>

<style>
	.card {
		background: #1e1e1f;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: transform 0.3s ease-in-out;
		color: #eee;
		min-width: 256px;
	}

	.card:hover {
		transform: scale(1.01);
		background: #28282a;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.info .album-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-top: 0.25rem /* 4px */;
		padding-bottom: 0.25rem /* 4px */;
	}

	.info .album-artist {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-top: 0.25rem /* 4px */;
		padding-bottom: 0.25rem /* 4px */;
		font-size: 0.8rem;
		opacity: 0.5;
	}
</style>
