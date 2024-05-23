<script lang="ts">
	import { themes } from '$lib/themes';

	function set_theme(event: Event) {
		const select = event.target as HTMLSelectElement;
		const theme = select.value;

		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/;`;
			document.documentElement.setAttribute('data-theme', theme);
		}
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function handleClick(event) {
		// You can access the clicked li value using event.target
		const value = event.target.textContent;
//		console.log(`Clicked li value: ${value}`);

		if (themes.includes(value)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', value);
			document.cookie = `theme=${value}; max-age=${one_year}; path=/;`;
			document.documentElement.setAttribute('data-theme', value);
		}
	}
</script>

<!--
<div class="mb-8">
	<select
		data-choose-theme
		class="select select-bordered select-primary w-full max-w-3xl text-xl capitalize"
		on:change={set_theme}
	>
		<option disabled UI selected> Choose a theme </option>
		{#each themes as theme}
			<option value={theme} class="capitalize">{theme}</option>
		{/each}
	</select>
</div>
-->
<div class="dropdown">
	<div tabindex="0" role="button" class="btn m-1 text-xs">Click</div>
	<ul
		tabindex="0"
		class="menu dropdown-content z-[1] w-52 bg-base-100 p-2 text-xs shadow"
	>
		{#each themes as theme}
			<li class="bg-primary text-primary-content" on:click={handleClick}>
				<span data-theme={theme} class="flex h-full shrink-0 flex-wrap justify-between gap-1">
					<span class="capitalize">{theme}</span>
					<span class="h-2 w-2 rounded-badge bg-primary" />
					<span class="h-2 w-2 rounded-badge bg-secondary" />
					<span class="h-2 w-2 rounded-badge bg-accent" />
					<span class="h-2 w-2 rounded-badge bg-neutral" />
				</span>
			</li>
		{/each}
	</ul>
</div>

<!--
<div class="dropdown mb-72">
  <div tabindex="0" role="button" class="btn m-1">
    Theme
    <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    {#each themes as theme}
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label={capitalizeFirstLetter(theme)} value={theme} /></li>
    {/each}
  </ul>
</div>
-->

<!--
{#each themes as theme}
<div data-theme={theme} class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
  <div class="grid grid-cols-5 grid-rows-3">
    <div class="bg-base-200 col-start-1 row-span-2 row-start-1" />
    <div class="bg-base-300 col-start-1 row-start-3" />
    <div
      class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
      <div class="font-bold">
        {theme}
      </div>
      <div class="flex flex-wrap gap-1">
        <div
          class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
          <div class="text-primary-content text-sm font-bold">A</div>
        </div>
        <div
          class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
          <div class="text-secondary-content text-sm font-bold">A</div>
        </div>
        <div
          class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
          <div class="text-accent-content text-sm font-bold">A</div>
        </div>
        <div
          class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
          <div class="text-neutral-content text-sm font-bold">A</div>
        </div>
      </div>
    </div>
  </div>
</div>
{/each}

-->
