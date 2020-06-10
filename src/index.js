//escucha cuando la pagina ya esta lista
import router from './routes'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)