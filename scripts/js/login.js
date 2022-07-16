/* Login */
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el formulario
    let form = document.getElementById('loginForm')
    let userForm = document.getElementById('user')
    let pwForm = document.getElementById('pw')
    let remember = document.getElementById('remember')

    
    form.addEventListener('submit', (e) => {
        e.preventDefault() //revision de formulario
        const verifyUser = credenciales.findIndex(credenciales => credenciales.user === userForm.value)
        if (verifyUser != -1) { //verify si el user existe
            if (pwForm.value == credenciales[verifyUser].pw) { //verify el index del user con la contraseña ingresada 
                if (remember.checked) { //Si se marca recordarme
                    localStorage.setItem('user', credenciales[verifyUser].username)
                }
                else { //Si no se marca recordarme
                    sessionStorage.setItem('user', credenciales[verifyUser].username)
                }
                window.location.href = '../index.html'
            }
            else {
                Toastify({
                    text: "Contraseña Incorrecta!",
                    style: {
                        background: "linear-gradient(to right, #951111, #e70801)",
                    },
                    duration: 3000
                }).showToast();
                form.reset()
            }
        }
        else{
            Toastify({
            text: "Usuario Incorrecto!",
            style: {
                background: "linear-gradient(to right, #951111, #e70801)",
            },
            duration: 3000
        }).showToast();
    }
        form.reset()
    })




    //obtener info del json
    async function requestUpgrades() {
        const response = await fetch("../scripts/json/credenciales.json")
        const data = await response.json()
        credenciales = data
        return credenciales
    } requestUpgrades();
})