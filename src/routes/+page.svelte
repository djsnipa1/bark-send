<script>
	import { toSend, encodedToSend } from '$lib/store.js';
	import ThemeSelect from '$lib/components/ThemeSelect.svelte';

	// Function to URL-encode the textarea value
	/*	function encodeValue() {
			return encodeURIComponent($toSend);
		}
*/

	$: encodedValue = encodeURIComponent($toSend);
</script>

<div class="container">
	<div class="flex w-full flex-col items-center justify-center border-2 border-orange-500">
		<h1
			class="bg-gradient-to-b from-yellow-500 via-amber-500 to-orange-600 bg-clip-text pt-8 text-center font-exo2 text-5xl font-bold text-transparent"
		>
			Send with Bark
		</h1>

		<div class="flex items-center gap-2 border-2 border-yellow-500">


			<!-- Integrate the ThemeSwitcher Component -->
			<ThemeSelect />
		</div>

		<div>
			<div class="mt-6 flex w-full flex-col items-center justify-center border-opacity-50">
				<textarea
					bind:value={$toSend}
					class="textarea textarea-bordered w-5/6 font-kodemono"
					placeholder={$toSend}
				></textarea>
				{$toSend}
				<div class="divider">THIS OR THAT</div>
				<textarea bind:value={$toSend}></textarea>
				<p>Encoded Value: {encodedValue}</p>



</div>

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
		</div>
	</div>

