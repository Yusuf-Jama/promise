//console.log(fetch ("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email")
console.log(emailRef)

fetch ("https://jsonplaceholder.typicode.com/users/1")
.then((Response) => {
    return Response.json()
    }).then((data) => {
        console.log(data)
    })