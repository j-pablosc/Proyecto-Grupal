
const nameInput = document.getElementById("exampleInputName1")
const password = document.getElementById("exampleInputPassword1")

const nameInputR = document.getElementById("exampleInputName2")
const passwordR = document.getElementById("exampleInputPassword2")

const formIngreso = document.getElementById("formIngreso")
const formRegistro = document.getElementById("formRegistro")
const btn = document.getElementById("btn")

const contaIngreso = document.getElementById("contaIngreso")
const contRegistro = document.getElementById("contRegistro")

const btnRegistro = document.getElementById("btnRegistro")
const btnIgreso = document.getElementById("btnIngreso")



formIngreso.addEventListener("submit", function (event) {
    event.preventDefault()


    const saveUser = localStorage.getItem('userName')
    const savePassword = localStorage.getItem('userPassword')

    let userName = nameInput.value
    let userPassword = password.value

    localStorage.setItem("userPassword", userPassword)
    localStorage.setItem("userName", userName)


    if ((saveUser === userName) && (savePassword === userPassword)) {
        window.location.href = "./home.html"
    } else {
        alert('El nombre o la contraseña no coincide')
    }

})

formRegistro.addEventListener("submit", function (event) {
    event.preventDefault()

    let userName = nameInputR.value
    let userPassword = passwordR.value

    localStorage.setItem("userPassword", userPassword)
    localStorage.setItem("userName", userName)

    window.location.href = "./registro.html"

})

btnRegistro.addEventListener("click", function () {
    contRegistro.classList.remove("d-none")
    contaIngreso.classList.add("d-none")
})
btnIgreso.addEventListener("click", function () {
    contRegistro.classList.add("d-none")
    contaIngreso.classList.remove("d-none")
})



