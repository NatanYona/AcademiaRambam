document.addEventListener('DOMContentLoaded', () => {
let temperature = document.getElementById("temp")
const successCallBack = (posicion) =>{
	//agarra las coordenadas del usuario si se le permite los permisos y otorga la Latitud y Longitud por separado
	let lat = posicion.coords.latitude 
	let long = posicion.coords.longitude
	
	//llamado de API
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c493238c03msha1167563a3b38e9p1c6f42jsnc5126cca31a4',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+(lat)+'%2C'+(long)+'', options) //definiendo parametros de datos a llamar
		.then(response => response.json())
		.then(data =>{
			temperature.innerHTML = (data.location.name) +" "+ (data.current.temp_c) +"°C." //recogida de datos necesarios 
		})
		.catch(err => console.error(err));
}

const errorCallBack = (error) =>{
	console.log(error)
}
navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack) //solicitud de permisos de ubicacion

})