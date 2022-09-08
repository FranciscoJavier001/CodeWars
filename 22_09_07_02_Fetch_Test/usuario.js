const app = document.querySelector('.container') //** Creo variable y del documento selecciono el contenedor */
const getUrl = new URLSearchParams(window.location.search) //** Variable para conseguir la Url, nueva instancia del metodo URLSP y recibe win.loc.ser* */
const id = getUrl.get('id') //** Solicito el id */
const url = `https://jsonplaceholder.typicode.com/users` //** La URL del endPoint */
fetch(`${url}/${id}`) //** Metodo para conseguir informacion de una api, pero le concateno el url y el id, pongo una barra en medio */
.then(res => res.json()) //** Entonces, me vas a traer una respuesta, esta variable en que respuesta */
.then(data => { //** Entonces traime la data */
    const name = document.createElement('p') //** VN, en el documento voy a crear un nuevo elemento del tipo */
    name.innerHTML = data.name //** VC, se va a insertar en el HTML pero de donde viene la info */
    const email = document.createElement('p')
    email.innerHTML = data.address.street
    app.appendChild(name) //** Donde quiero mostrar lo que saque */
    app.appendChild(email)
    
})
.catch( err => console.log(err)) //** Cacha el error */