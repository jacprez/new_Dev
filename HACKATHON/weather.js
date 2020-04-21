let appId = "a5004b40e2b8049677aceb19f7f32148";
let units = "imperial";
let searchMethod;

function getSearchMethod(searchTerm) {
	if(searchTerm.length === 5 && Number.parseInt(searchTerm) + "" === searchTerm)
		searchMethod ="zip";
	else
		searchMethod= "q";

}



function searchWeather(searchTerm) {
	getSearchMethod(searchTerm);
	fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
		return result.json();
	}).then(result => {
		init(result);
	})
}


function init(resultFromServer) {
	console.log(resultFromServer);
	switch(resultFromServer.weather[0].main){
		case 'Clear':
			document.body.style.backgroundImage= 'url("sunny.jpg")';
			break;
		
		case 'Clouds':
			document.body.style.backgroundImage= 'url("cloudy.jpg")';
			break;

		case 'Rain':
		case 'Drizzle':
		case 'Mist':
			document.body.style.backgroundImage= 'url("rain.jpg")';
			break;


		case 'Thunderstorm':
		document.body.style.backgroundImage= 'url("storm.jpg")';
			break;

		case 'Snow':
			document.body.style.backgroundImage= 'url("snow.jpg")';
			break;
		

		default:
			break;
	}
	let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
	let temperatureElement = document.getElementById('temperature');
	let feelsLikeElement = document.getElementById('feelsLike');
	let windspeedElement = document.getElementById('windSpeed');
	let humidityElement = document.getElementById('humidity');
	let cityHeader = document.getElementById('cityHeader');
	let weatherIcon = document.getElementById('documentIconImg');

	weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

	let resultDescription = resultFromServer.weather[0].description;
	weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() +resultDescription.slice(1);
	feelsLikeElement.innerText= 'Feels like ' + Math.floor(resultFromServer.main.feels_like) + ' F';
	temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + ' &#176 F';
	windspeedElement.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + ' miles per second';
	cityHeader.innerHTML = resultFromServer.name;
	humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';

}




document.getElementById('searchBtn').addEventListener('click', () => {
	let searchTerm=document.getElementById('searchInput').value;
	if (searchTerm)
		searchWeather(searchTerm);


})












