<script>
	import { toSend, encodedToSend } from '$lib/store.js';

		// Function to URL-encode the textarea value
	/*	function encodeValue() {
			return encodeURIComponent($toSend);
		}
*/
	$: encodedValue = encodeURIComponent($toSend)
	</script>

	
<h1
	class="bg-gradient-to-b from-yellow-500 via-amber-500 to-orange-600 bg-clip-text text-5xl text-transparent text-center font-extrabold pt-8"
>
	Send with Bark
</h1>

<div class="flex flex-col w-full border-opacity-50 justify-center items-center mt-6">
	
	<textarea bind:value={$toSend} class="textarea textarea-bordered w-5/6" placeholder={$toSend}></textarea>
{$toSend}
	<div class="divider">THIS OR THAT</div>
	<textarea bind:value={$toSend}></textarea>
		<p>Encoded Value: {encodedValue}</p>



	<div class="divider">OR</div>

	<!-- xs -->
	<textarea placeholder="Bio" class="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
	<!-- sm -->
	<textarea placeholder="Bio" class="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
	<!-- md -->
	<textarea placeholder="Bio" class="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
	<!-- lg -->
	<textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
</div>

<div class="artboard phone-2">375×667</div>
