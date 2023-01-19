<script>
	import '../app.css';
	import Menu from 'svelte-material-icons/Menu.svelte';
	export let size = '2em';
</script>

<svelte:head>
	<title>Chanfle Api</title>
	<meta name="description" content="Información de peliculas y series" />
</svelte:head>

<nav class="navbar bg-black text-white">
	<div class="dropdown">
		<span tabIndex={0} class="btn btn-ghost bg-black  m-1 md:hidden lg:hidden xl:hidden 2xl:hidden"
			><Menu {size} /></span
		>
		<ul tabIndex={0} class="dropdown-content menu p-2 shadow bg-black rounded-box w-52">
			<li>
				<a href="/login">Iniciar sesión</a>
			</li>
			<li>
				<a href="/">Breacking Bad</a>
			</li>
			<li>
				<a href="/rickmorty">Ryck & Morty</a>
			</li>
			<li>
				<a href="/">NASA Day🔭</a>
			</li>
			<li>
				<a href="/">Pokedex🐉</a>
			</li>
			<li>
				<a href="/coins">Crypto's💸</a>
			</li>
		</ul>
	</div>

	<!-- nav web -->
	<div class="navbar-end justify-right text-right">
		<ul class="menu menu-horizontal space-x-28 lg:space-x-18 md:space-x-4 sm:space-x-2 sm:hidden">
			<li>
				<a href="/login">Iniciar sesión</a>
			</li>
			<li>
				<a href="/">Breacking Bad</a>
			</li>
			<li>
				<a href="/rickmorty">Ryck & Morty</a>
			</li>
		</ul>
	</div>
	<div class="navbar-center">
		<a href="/"
			><img
				src="src/images/logo.png"
				alt="Logo Nasa"
				class="h-16 btn bg-black border-0 sm:mr-16"
			/></a
		>
	</div>
	<div class="navbar-start justify-left text-left">
		<ul class="menu menu-horizontal space-x-28 lg:space-x-16 md:space-x-4 sm:space-x-2 sm:hidden">
			<li>
				<a href="/">NASA Day🔭</a>
			</li>
			<li>
				<a href="/">Pokedex🐉</a>
			</li>
			<li>
				<a href="/coins">Crypto's💸</a>
			</li>
		</ul>
	</div>
</nav>

<slot />
