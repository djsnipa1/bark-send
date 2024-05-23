<script>
	import '../app.pcss';
	import '@fontsource/kode-mono';
	// Supports weights 100-900
	import '@fontsource-variable/exo-2';

	/*	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

	onMount(() => themeChange(false));
	*/

</script>

<slot />

<style>
	:global(html) {
		font-family: 'Exo 2 Variable', sans-serif;
	}
</style>
