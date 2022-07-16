//obteniendo ID del form
document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('contactForm')
    let nombre = document.getElementById('contactName')
    let telefono = document.getElementById('contactPhone')
    let email = document.getElementById('contactEmail')
    let mensaje = document.getElementById('contactMessage')
    let hayError = false

    form.addEventListener('submit', (x) => {
        x.preventDefault()
        hayError = false // verificacion de que el forms no esta vacio
        if (nombre.value === '' || nombre.value === null || nombre.value === 'undefined') {
            verifyContent("Nombre")
            hayError = true
        }
        if (telefono.value === '' || telefono.value === null || telefono.value === 'undefined') {
            verifyContent("Telefono")
            hayError = true
        }
        if (email.value === '' || email.value === null || email.value === 'undefined') {
            verifyContent("Email")
            hayError = true
        }
        if (mensaje.value === '' || mensaje.value === null || mensaje.value === 'undefined') {
            verifyContent("Mensaje")
            hayError = true
        }
        if (!hayError){
            Toastify({ //success send
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

//toastify dependiendo del campo incompleto
function verifyContent(campo){
    Toastify({
        text: "Tienes que agregar un "+ campo + "!",
        style: {
            background: "linear-gradient(to right, #951111, #e70801)",
        },
        duration: 2000
    }).showToast();
}


})
