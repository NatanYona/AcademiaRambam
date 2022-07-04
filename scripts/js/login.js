/* Login */
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el formulario
    let form = document.getElementById('loginForm')
    let userForm = document.getElementById('user')
    let pwForm = document.getElementById('pw')
    let remember = document.getElementById('remember')
    let verify = { user: false, pw: false }
    // Comprobamos que los campos no estén vacios
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(userForm.value == credenciales[0].user){
            if(pwForm.value == credenciales[0].pw){
                if (remember.checked) {
                    localStorage.setItem('user', credenciales[0].username)
                }
                else {
                    sessionStorage.setItem('user', credenciales[0].username)
                }
                window.location.href = '../index.html'
            }
            else{
                console.log("pw")
            }
        }
        else{
            console.log("nombre")
        }
    })



//obtener info del json
async function requestUpgrades() {
        const response = await fetch("../scripts/json/credenciales.json")
        const data = await response.json()
        credenciales = data
        JSON.stringify(data)
        console.log(credenciales[0].pw)
        return credenciales
    }requestUpgrades();
})