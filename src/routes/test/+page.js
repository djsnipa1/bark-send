export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const title = 'This is a fuckin title';
	const response = await fetch('/api/bark');
	const bark = await response.json();
	return {
		title,
		bark
	};
};
