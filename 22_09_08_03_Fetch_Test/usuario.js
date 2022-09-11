//** Creo variable y del documento selecciono el contenedor */
//** Variable para conseguir la Url, nueva instancia del metodo URLSP y recibe win.loc.ser* */
//** Variable del id, de la misma variable con el metodo conseguir y elegir el elemento que quiero */
//** La URL del endPoint */
//** Metodo para conseguir informacion de una api, pero le concateno el url y el id, pongo una barra en medio */
//** Entonces, me vas a traer una respuesta, esta variable en que respuesta */
//** Entonces traime la data */
//** VN, en el documento voy a crear un nuevo elemento del tipo */
//** VC, se va a insertar en el HTML pero de donde viene la info */
//** Donde quiero mostrar lo que saque */    
//** Cacha el error */

const app = document.querySelector(".container")
const getUrl = new URLSearchParams(window.location.search)
const id = getUrl.get('id')
const url = `https://jsonplaceholder.typicode.com/users`

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const usuarioIndividual = document.createElement('p')
    usuarioIndividual.innerHTML = data.name
    app.appendChild(usuarioIndividual)
    console.log(usuarioIndividual);
})
.catch(err => err)