import getData from '../utils/getData';

const Home = async () => {
	//Como es el home, no le pasamos ningún id
	const characters = await getData();
	const view = `
    <div class="Characters">
      ${characters.results.map(CharacterView).join('')}
    </div> 
  `;
	//join porque .map retorna un arreglo, y cada personaje se separa por comas
	//para que no se vean las comas del array en la pagina, usamos join
	return view;
};

const CharacterView = (character) =>
	`
  <article class="Character-item">
    <a href="#/${character.id}/">
    <img src="${character.image}" alt="${character.name}">
    <div class="Character-info">
    <h2>${character.name}</h2>
    <p>${character.species}</p>
    </div>
    </a>
  </article>
`;

export default Home;
