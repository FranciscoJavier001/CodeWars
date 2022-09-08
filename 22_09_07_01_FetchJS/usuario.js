const app = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = `https://jsonplaceholder.typicode.com/users`
console.log(`${url}/${id}`);
fetch(`${url}/${id}`)
.then( resp => resp.json())
.then(data => {
    const name = document.createElement('p')
    name.innerHTML = data.name
    const email = document.createElement('p')
    email.innerHTML = data.email
    app.appendChild(name)
    app.appendChild(email)
})
.catch( err => console.log(err))