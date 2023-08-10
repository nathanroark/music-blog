<script>
	import '../app.css'; // for Tailwind CSS
	import './styles.css';
	// import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div class="min-h-screen items-center justify-center bg-zinc-950 no-scrollbar">
	<Navbar />

	<main>
		<slot />
	</main>
</div>
