import getData from '../utils/getData'

const Home = async () => {
  //como es el home, queremos que traiga todos los personajes
  //por eso no le pasamos ningun id
  const characters = await getData()
  const view = `
    <div calss="Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div> 
  `
  //join porque .map retorna un arreglo, y cada personaje se separa por comas
  //para que no se vean las comas del array en la pagina, usamos join
  return view
}

export default Home