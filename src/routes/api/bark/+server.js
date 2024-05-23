import { BARK_KEY } from '$env/static/private';
import { encodedToSend } from '$lib/store';

export async function GET() {

  // Define the URL of the external API
  const externalApiUrl = `https://api.day.app/${BARK_KEY}/Copy?copy=${encodedToSend}`;

	const response = await fetch(externalApiUrl);

	const result = await response.json();
	// Set up any necessary headers, including authentication if required
	const headers = {
		'Content-Type': 'application/json'
		// 'Authorization': 'Bearer YOUR_API_TOKEN', // Uncomment and replace with your token if needed
	};

	return new Response(JSON.stringify(result), {
		headers: headers,
		status: response.status
	});
	// Make the POST request to the external API
	// const response = await fetch(externalApiUrl, {
	//   method: 'POST',
	//   headers: headers,
	//   body: JSON.stringify(data),
	// });

	// Return the result back to the client
	// return {
	//   status: response.status,
	//   body: result,
	// };l
}
