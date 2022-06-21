/* Login */
const Credenciales = {user: 'damian@gmail.com', pass: "1234"};
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el formulario
    let form = document.getElementById('loginForm')
    let user = document.getElementById('user')
    let pw = document.getElementById('pw')
    let remember = document.getElementById('remember')
    let verify = { user: false, pw: false }

    // Comprobamos que los campos no estén vacios
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        verify.user = (user.value === Credenciales.user)
        verify.pw = (pw.value === Credenciales.pass)

        verify()
    function verify(){
        if (verify.user && verify.pw) {
            if(remember.checked){
                localStorage.setItem('user', user.value)
            }
                else{
                sessionStorage.setItem('user', user.value)
            }
            userError.innerText = ''
            pwError.innerText = ''
            window.location.href = '../index.html'
        }
        else if (verify.user == false) {
            let userError = document.getElementById('userError')
            userError.innerHTML = 'Usuario incorrecto'
        }
        else if (verify.pw == false) {
            let pwError = document.getElementById('pwError')
            pwError.innerHTML = 'Contraseña incorrecta'
            userError.innerHTML = ''
        }
    }
    })
    
})

