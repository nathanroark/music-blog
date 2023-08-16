<script lang="ts">
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import type { Post } from '$lib/types';
	import GenreSelect from './GenreSelectNav.svelte';
	export let posts: Post[] = [];

	let sortMethod = 'Post';

	const FilterMethods = ['some', 'every'];
	let selectedFilterMethod = FilterMethods[0];

	let sortOptions = [
		'Post',
		'Post Reverse',
		'Artist',
		'Artist Reverse',
		'Release',
		'Release Reverse'
	];

	function sortMethodSelected(e: any) {
		const target = e.target;

		sortMethod = target.value;
		switch (sortMethod) {
			case 'Post': {
				posts = posts.sort(
					(first, second) =>
						new Date(second.post_date).getTime() - new Date(first.post_date).getTime()
				);
				break;
			}
			case 'Post Reverse': {
				posts = posts.sort(
					(first, second) =>
						new Date(first.post_date).getTime() - new Date(second.post_date).getTime()
				);
				break;
			}
			case 'Artist': {
				posts = posts.sort((a, b) => {
					let artistA = a.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					let artistB = b.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					return artistA > artistB ? 1 : -1;
				});
				break;
			}
			case 'Artist Reverse': {
				posts = posts.sort((a, b) => {
					let artistA = a.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					let artistB = b.artist.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
					return artistA < artistB ? 1 : -1;
				});
				break;
			}
			case 'Release': {
				posts = posts.sort(
					(first, second) =>
						new Date(second.release_date).getTime() - new Date(first.release_date).getTime()
				);
				break;
			}
			case 'Release Reverse': {
				posts = posts.sort(
					(first, second) =>
						new Date(first.release_date).getTime() - new Date(second.release_date).getTime()
				);
				break;
			}
			default: {
				posts = posts.sort((a, b) => (a.post_date < b.post_date ? 1 : -1));
				break;
			}
		}
	}
	const rawGenreList = [
		'Midwest Emo',
		'Shoegaze',
		'Indie Rock',
		'Post Hardcore',
		'Screamo',
		'J-Rock',
		'Singer Songwriter',
		'Post Rock',
		'Emo',
		'Indietronica',
		'Indie Folk',
		'Noise Pop',
		'Neo-Psychedelia',
		'Math Rock',
		'Noise Rock',
		'Psychedelic Folk',
		'Blackgaze',
		'Post Metal',
		'Experemental Rock',
		'Slowcore',
		'Sadcore',
		'Folktronica',
		'Post-Punk',
		'Drone',
		'Post-Industrial',
		'Gothic Rock',
		'Post-Hardcore',
		'Spoken Word',
		'Poetry',
		'Trip Hop',
		'Indie Pop',
		'Contemporary Folk',
		'Americana',
		'Pop Punk',
		'Advent-Folk',
		'Neo-soul',
		'Psychedelic Soul',
		'Funk',
		'Funktronica',
		'Acid Jazz',
		'Breakcore',
		'Atmospheric Drum and Bass',
		'Electronic'
	];

	let genreList = rawGenreList.map((genre) => {
		return { name: genre, selected: false };
	});

	$: {
		posts = posts.filter((posts) => {
			if (selectedFilterMethod === 'some') {
				return genreList.some((g) => {
					return g.selected && posts.genres.includes(g.name);
				});
			} else {
				return genreList.every((g) => {
					return g.selected && posts.genres.includes(g.name);
				});
			}
		});
	}
</script>

<div>
	<div class="top">
		<div class="corner">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="sveltekit" />
			</a>
		</div>
		<div class="corner">
			<a href="https://github.com/sveltejs/kit">
				<img src={github} alt="github" />
			</a>
		</div>
	</div>

	<div class="p-12 text-xl space-y-6">
		<!-- <label class="label">
			<span>Sort Method</span>
			<select class="select" bind:value={sortMethod} on:change={sortMethodSelected}>
				{#each sortOptions as option}
					<option value={option}>
						{option}
					</option>
				{/each}
			</select>
		</label> -->
		<div class="flex flex-col">
			<span>Filter Method</span>
			<RadioGroup class="w-fit" active="variant-filled-primary" hover="hover:variant-soft-primary">
				<RadioItem bind:group={selectedFilterMethod} name="justify" value={FilterMethods[0]}
					>{FilterMethods[0]}</RadioItem
				>
				<RadioItem bind:group={selectedFilterMethod} name="justify" value={FilterMethods[1]}
					>{FilterMethods[1]}</RadioItem
				>
			</RadioGroup>
		</div>
		<div>
			<span>Genre List</span>
			<ul>
				{#each genreList as item, i}
					{#if item.selected}
						<li>
							{item.name}
							<button class="bg-zinc-700" on:click={() => (genreList[i].selected = false)}
								>Remove from cart</button
							>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
		<GenreSelect />
	</div>
</div>

<style>
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

	a:hover {
		color: var(--color-theme-1);
	}
</style>
