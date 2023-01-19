export const load = async () => {
	const apiRick = await fetch('https://rickandmortyapi.com/api/character');
	const data = await apiRick.json();

	return { results: data };
};
