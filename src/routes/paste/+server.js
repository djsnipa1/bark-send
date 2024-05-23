import { json } from '@sveltejs/kit';
import { receivedPOST } from '$lib/store.js';

export async function POST({ request }) {
	const data = await request.text();
	// Do something with the text data
	$receivedPOST = data;
	return json({ message: 'Text received!\n\n' + data });
}
