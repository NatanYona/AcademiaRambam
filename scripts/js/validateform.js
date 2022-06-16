document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('contactForm')
    let nombre = document.getElementById('contactName')
    let tel = document.getElementById('contactPhone')
    let email = document.getElementById('contactEmail')
    let mensaje = document.getElementById('contactMessage')


    form.addEventListener('submit', (x) => {
        x.preventDefault()
        if (nombre.value === '' || nombre.value === null || nombre.value === 'undefined') {
            Toastify({
                text: "Tienes que agregar tu nombre!",
                style: {
                    background: "linear-gradient(to right, #951111, #e70801)",
                },
                duration: 2000
            }).showToast();
        }
        if (tel.value === '' || tel.value === null || tel.value === 'undefined') {
            Toastify({
                text: "Tienes que agregar un numero de telefono!",
                style: {
                    background: "linear-gradient(to right, #951111, #e70801)",
                },
                duration: 2000
            }).showToast();
        }
        if (email.value === '' || email.value === null || email.value === 'undefined') {
            Toastify({
                text: "Tienes que agregar un correo!",
                style: {
                    background: "linear-gradient(to right, #951111, #e70801)",
                },
                duration: 2000
            }).showToast();
        }
        if (mensaje.value === '' || mensaje.value === null || mensaje.value === 'undefined') {
            Toastify({
                text: "Tienes que agregar un mensaje!",
                style: {
                    background: "linear-gradient(to right, #951111, #e70801)",
                },
                duration: 2000
            }).showToast();
        }
        else {
            Toastify({
                text: "Gracias por contactarte con nosotros " + nombre.value + "!",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                duration: 3000
            }).showToast();
            form.reset()
        }
    }
    )









})
