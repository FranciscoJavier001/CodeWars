const app = document.querySelector('.container')
const url = `https://jsonplaceholder.typicode.com/users`

fetch(url)
.then( res => res.json())
.then(data => {
    data.forEach(usuario => {
        // console.log(usuario);
        // console.log(usuario.name);
        const usuarioIndividual = document.createElement('p')
        usuarioIndividual.setAttribute('id', usuario.id)
        usuarioIndividual.innerHTML = usuario.name
        usuarioIndividual.addEventListener('click', function(){
            window.location.href = `./usuario.html?id=${usuario.id}`
        })
        app.appendChild(usuarioIndividual)
    })
    console.log(data);
})
.catch( err => console.log(err))