import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Characters'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
  '/': Home,
  //el id sera un valor dinamico, dependiendo del personaje
  '/:id': Character,
  '/contact': Error404
}


//manejador de la pagina, se encarga de actualizar la ruta de la url
//tambien de renderizar los personajes
const router = async () => {
  const $header = null || document.getElementById('header')
  const $content = null || document.getElementById('content')
  //manda el template de header hacia el html
  $header.innerHTML = await Header()
  let hash = getHash()
  //obtenemos el hash de la función getHash
  let route = await resolveRoutes(hash)
  //pasamos de forma dinamica la ruta a routes
  let render = routes[route] ? routes[route] : Error404
  $content.innerHTML = await render()
}

export default router