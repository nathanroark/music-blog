<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.css'; // for Tailwind CSS
	import './styles.css';
	import Navbar from './Navbar.svelte';
</script>

<html lang="en" class="dark">
	<div class="min-h-screen items-center justify-center bg-zinc-950 no-scrollbar">
		<main>
			<Navbar />
			<slot />
		</main>
	</div>
</html>
