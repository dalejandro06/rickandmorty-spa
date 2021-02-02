const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
	//si recibe el parametro, generamos una nueva url con el id
	const apiURl = id ? `${API}${id}` : API;
	try {
		const response = await fetch(apiURl);
		const data = await response.json();
		return data;
	} catch (err) {
		console.error('Fetch Error', err);
	}
};

export default getData;
