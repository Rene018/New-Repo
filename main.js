let primerInput = document.getElementById("name")
let segundoInput = document.getElementById("age")
let showName = document.getElementById("bNombre")
let showHi = document.getElementById("showHi")
let showPrivacy = document.getElementById("showPrivacy")
let resultado = document.getElementById("saludo")

let nombre = ""
let edad = ""
primerInput.addEventListener("input", (e) =>{
    nombre = e.target.value
})

segundoInput.addEventListener("input", (e) =>{
    edad = e.target.value
})

showName.addEventListener("click", () =>{
    resultado.innerHTML = `<h1> Nombre: ${nombre}</h1>
    <h2> Edad: ${edad}</h2>`
})

showHi.addEventListener("click", () =>{
    resultado.innerHTML = `<h1> Hola ${nombre} Bienvenido</h1>`
})

showPrivacy.addEventListener("click", () =>{
    if (edad > 18) {
        resultado.innerHTML = `<h1> Hola ${nombre} Eres mayor de edad</h1>`
    }else{
        resultado.innerHTML = `<h1> Hola ${nombre} Eres menor de edad</h1>`
    }
    
})


