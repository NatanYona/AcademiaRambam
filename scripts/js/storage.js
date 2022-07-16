
let user = sessionStorage.getItem('user') || localStorage.getItem('user');
window.onload = function () {
    if (user != null) { // verifica si existe un user en el storage
        document.getElementById('userButton').innerHTML = user;
        let userLogout = document.getElementById('userLogout');
        userLogout.classList.remove("d-none"); // muestra el boton de logout
        userLogout.addEventListener('click', () => {
            sessionStorage.removeItem('user'); // elimina el user del storage
            localStorage.removeItem('user');
            window.location.href = '../index.html';
        })
    }
}



