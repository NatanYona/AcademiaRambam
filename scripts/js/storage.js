
let user = sessionStorage.getItem('user') || localStorage.getItem('user');
window.onload = function () {
    if (user != null) {
        document.getElementById('userButton').innerHTML = user;
        let userLogout = document.getElementById('userLogout');
        userLogout.classList.remove("d-none");
        userLogout.addEventListener('click', () => {
            sessionStorage.removeItem('user');
            localStorage.removeItem('user');
            window.location.href = '../index.html';
        })
    }
}



