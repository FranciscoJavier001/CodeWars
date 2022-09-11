

const app = document.querySelector('.container')
const url = `https://jsonplaceholder.typicode.com/users`

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        const usuarioIndividual = document.createElement('p')
        usuarioIndividual.setAttribute('id', usuario.id)
        usuarioIndividual.innerHTML = usuario.name
        usuarioIndividual.addEventListener('click', () => {
            window.location.href = `./usuario.html?id=${usuario.id}`
        })
        app.appendChild(usuarioIndividual)
    })
})
.catch(err => err)