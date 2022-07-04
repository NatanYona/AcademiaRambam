document.addEventListener('DOMContentLoaded', () => {
let temperature = document.getElementById("temp")
const successCallBack = (posicion) =>{
	let lat = posicion.coords.latitude
	let long = posicion.coords.longitude
	
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'c493238c03msha1167563a3b38e9p1c6f42jsnc5126cca31a4',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+(lat)+'%2C'+(long)+'', options)
		.then(response => response.json())
		.then(data =>{
			temperature.innerHTML = (data.location.name) +" "+ (data.current.temp_c) +"°C."
		})
		.catch(err => console.error(err));
}

const errorCallBack = (error) =>{
	console.log(error)
}
navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack)




})