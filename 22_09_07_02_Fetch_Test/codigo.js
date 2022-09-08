const app = document.querySelector(".container") //** Constante que apunte al container de qS */
const url = `https://jsonplaceholder.typicode.com/users` //** Url del EndPoint */

fetch(url) //** Metodo para recibir informacion, parametro que recibe(de donde trae la info) */
.then(res => res.json()) //** Entonces, el nuevo arreglo, FF, el nuevo arreglo se presenta en formato */
.then(data => { //** Metodo, nuevo arreglo, FF, instrucciones */
    data.forEach(usuario => { //** Arreglo, para cada uno, creo un nuevo arreglo, FF e instrucciones */
        const usuarioIndividual = document.createElement('p') //** Nueva variable, en el documento creo un nuevo elemento, y digo cual */
        usuarioIndividual.setAttribute('id', usuario.id) //** Variable le creo un nuevo metodo y le coloco el atributo id y de donde viene */
        usuarioIndividual.innerHTML = usuario.name //** Variable, la muestro en el html y que quiero mostrar */
        usuarioIndividual.addEventListener('click', () => { //** Variable le paso un evento que este atento, cuando haga click, FF anonima */
            window.location.href = `./usuario.html?id=${usuario.id}` //** Direccion  donde se va a redireccionar */
        })
        app.appendChild(usuarioIndividual) //** Variable, que aparezca, que quiero que aparezca */
    })
})
.catch(err => console.log(err)) //** Cacha el error */