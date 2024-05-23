<script>
	import { toSend, encodedToSend } from '$lib/store.js';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	// Function to URL-encode the textarea value
	/*	function encodeValue() {
			return encodeURIComponent($toSend);
		}
*/
	$: encodedValue = encodeURIComponent($toSend);
</script>

<main class="flex h-screen w-full flex-col items-center justify-center border-2 border-orange-500">
	<div class="flex items-center gap-2 border-2 border-yellow-500">
		<button class="btn btn-primary">Primary</button>

		<!-- Integrate the ThemeSwitcher Component -->
		<ThemeSwitcher />
	</div>

	<div>
		<h1
			class="bg-gradient-to-b from-yellow-500 via-amber-500 to-orange-600 bg-clip-text pt-8 text-center text-5xl font-extrabold text-transparent"
		>
			Send with Bark
		</h1>

		<div class="mt-6 flex w-full flex-col items-center justify-center border-opacity-50">
			<textarea bind:value={$toSend} class="textarea textarea-bordered w-5/6" placeholder={$toSend}
			></textarea>
			{$toSend}
			<div class="divider">THIS OR THAT</div>
			<textarea bind:value={$toSend}></textarea>
			<p>Encoded Value: {encodedValue}</p>

			<div class="divider">OR</div>

			<!-- xs -->
			<textarea placeholder="Bio" class="textarea textarea-bordered textarea-xs w-full max-w-xs"
				>{$toSend}</textarea
			>
			<!-- sm -->
			<textarea placeholder="Bio" class="textarea textarea-bordered textarea-sm w-full max-w-xs"
				>{$toSend}</textarea
			>
			<!-- md -->
			<textarea placeholder="Bio" class="textarea textarea-bordered textarea-md w-full max-w-xs"
				>{$toSend}</textarea
			>
			<!-- lg -->
			<textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs"
				>{$toSend}</textarea
			>
		</div>

		<div class="artboard phone-2">375×667</div>
	</div>
</main>
