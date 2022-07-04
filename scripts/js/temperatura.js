document.addEventListener('DOMContentLoaded', () => {
let temperature = document.getElementById("temp")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c493238c03msha1167563a3b38e9p1c6f42jsnc5126cca31a4',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Cordoba%2C%20Ar&format=json&u=c', options)
	.then(response => response.json())
	.then(data =>{
        temperature.innerHTML = (data.location.city) +" "+ (data.current_observation.condition.temperature) +"°C."
		
    })
    
	.catch(err => console.error(err))
})