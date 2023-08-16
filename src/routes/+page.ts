import type { Post } from '$lib/types'

export async function load({ fetch }: { fetch: any }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	console.log('Fetching posts organized by params: ', fetch.params)
	return { posts }
}


//function getPostsByGenres(posts: Post[], genres: string[]) {
//	return posts.filter(post => {
//		return post.genres.some(genre => genres.includes(genre))
//	})
//}
