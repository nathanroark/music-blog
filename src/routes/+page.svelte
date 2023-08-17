<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	import type { Post } from '$lib/types';
	import AlbumView from './AlbumView.svelte';
	export let data: { posts: Post[] } = { posts: [] };

	$: query = new URLSearchParams($page.url.searchParams.toString());
	$: genres =
		query
			.get('genres')
			?.split(',')
			.filter((x) => x) || [];
	$: sortMethod = query.get('sort') || 'Post';
	$: filterMethod = query.get('filter') || 'some';
	$: posts =
		filterMethod == 'some'
			? sortPosts(getPostsByGenresSome(data.posts, genres), sortMethod)
			: sortPosts(getPostsByGenresEvery(data.posts, genres), sortMethod);

	function getPostsByGenresSome(posts: Post[], genres: string[]) {
		if (genres.length == 0) return posts; // split(',') returns [''] when empty, fix later
		console.log('Genres: ', genres);
		return posts.filter((p) => {
			return p.genres.some((g) => genres.includes(g));
		});
	}

	function getPostsByGenresEvery(posts: Post[], genres: string[]) {
		if (genres.length == 0) return posts; // split(',') returns [''] when empty, fix later
		return posts.filter((post) => {
			return genres.every((genre) => post.genres.includes(genre));
		});
	}

	function sortPosts(posts: Post[], sortMethod: string) {
		switch (sortMethod) {
			case 'Post': {
				return posts.sort(
					(first, second) =>
						new Date(second.post_date).getTime() - new Date(first.post_date).getTime()
				);
			}
			case 'Post Reverse': {
				return posts.sort(
					(first, second) =>
						new Date(first.post_date).getTime() - new Date(second.post_date).getTime()
				);
			}
			case 'Artist': {
				return posts.sort((a, b) => {
					let artistA = a.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					let artistB = b.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					return artistA > artistB ? 1 : -1;
				});
			}
			case 'Artist Reverse': {
				return posts.sort((a, b) => {
					let artistA = a.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					let artistB = b.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					return artistA < artistB ? 1 : -1;
				});
			}
			case 'Release': {
				return posts.sort(
					(first, second) =>
						new Date(second.release_date).getTime() - new Date(first.release_date).getTime()
				);
			}
			case 'Release Reverse': {
				return posts.sort(
					(first, second) =>
						new Date(first.release_date).getTime() - new Date(second.release_date).getTime()
				);
			}
			default: {
				return posts.sort((a, b) => (a.post_date < b.post_date ? 1 : -1));
			}
		}
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div class="flex justify-center items-center flex-col pt-[3rem]">
		<AlbumView {posts} />
	</div>
</section>
