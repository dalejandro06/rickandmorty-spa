//saber a que template o ruta vamos a mandar al usuario
const resolveRoutes = (route) => {
  //necesita la ruta obtenida por getHash
  //la api tiene n cantidad de personajes pero no son mas de 1000,
  //si en getHash se obutvo un id no puede ser mayor a 3 caracteres, si lo es regresamos al home, esto en la barra de navegacion cientifico/id
  if(route.length <= 3) {
    //si route = / devuelva route, si no devuelva un id
    let valideRoute = route === '/' ?route :'/:id'
    return valideRoute
  }
  //como about es mayor a 3, si no entra al if retornamos la ruta por defecto
  //cientifico/#about
  return `/${route}`
}

export default resolveRoutes