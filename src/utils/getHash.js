const getHash = () =>
	//.slice elmina el primer elemento, lo convierte en lower case y elimina el / ya que nosotros lo ponemos en nuestras rutas, accedemos al id
	//se puede ver ejecutando location.hash
	location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
//nos devuelve esto ['', 'id', '']

export default getHash;
