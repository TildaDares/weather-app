const celsiusBtn = document.querySelector(".celsius");
const fahrBtn = document.querySelector(".fahr");
const loading = document.querySelector(".loading");
const weatherCard = document.querySelector(".weather-card");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels-like");
let weatherData;

function addListeners() {
	document
		.querySelector(".search-btn")
		.addEventListener("click", getCityWeather);
	celsiusBtn.addEventListener("click", toCelsius);
	fahrBtn.addEventListener("click", toFahrenheit);
}

function getCityWeather() {
	const searchText = document.querySelector(".search-text").value;
	if (searchText !== "") {
		getWeather(searchText);
	}
}

async function getWeather(city) {
	try {
		loading.style.display = "block";
		weatherCard.style.display = "none";
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=acbf276018dff8bc22038492e6e32b85`,
			{ mode: "cors" }
		);
		const data = await response.json();
		weatherData = getData(data);
		appendWeatherData(weatherData);
		localStorage.setItem("lastSearchedCity", city);
		document.querySelector("#searchError").textContent = "";
	} catch (err) {
		document.querySelector("#searchError").textContent = "Location not found!";
		loading.style.display = "none";
		weatherCard.style.display = "block";
	}
}

function appendWeatherData(data) {
	const country = document.querySelector(".country");
	const humidity = document.querySelector(".humidity");
	const pressure = document.querySelector(".pressure");
	const desc = document.querySelector(".desc");
	const icon = document.querySelector(".weather-icon");
	country.textContent = `${data.city}, ${data.country}`;
	initialTempUnit();
	humidity.textContent = `${data.humidity}%`;
	pressure.textContent = `${data.pressure}hPa`;
	desc.textContent = `${data.description}`;
	icon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
	loading.style.display = "none";
	weatherCard.style.display = "block";
}

function getData(data) {
	const weatherData = {
		tempInCelsius: data.main.temp,
		feelsLike: data.main.feels_like,
		humidity: data.main.humidity,
		pressure: data.main.pressure,
		description: data.weather[0].description,
		icon: data.weather[0].icon,
		country: data.sys.country,
		city: data.name,
	};

	return weatherData;
}

function initialTempUnit() {
	if (
		!("tempUnit" in localStorage) ||
		localStorage.getItem("tempUnit") === "celsius"
	) {
		toCelsius();
	} else {
		toFahrenheit();
	}
}

function toCelsius() {
	localStorage.setItem("tempUnit", "celsius");
	document.querySelector(".celsius").classList.add("btn-active");
	document.querySelector(".fahr").classList.remove("btn-active");
	temp.textContent = `${weatherData.tempInCelsius}\u00B0`;
	feelsLike.textContent = `${weatherData.feelsLike}\u00B0`;
}

function toFahrenheit() {
	const tempFahr = tempToFahrenheit(weatherData.tempInCelsius);
	const feelsLikeFahr = tempToFahrenheit(weatherData.feelsLike);
	localStorage.setItem("tempUnit", "fahr");
	document.querySelector(".celsius").classList.remove("btn-active");
	document.querySelector(".fahr").classList.add("btn-active");
	temp.textContent = `${tempFahr}\u00B0`;
	feelsLike.textContent = `${feelsLikeFahr}\u00B0`;
}

function tempToFahrenheit(temp) {
	return Math.round((temp * 9) / 5 + 32);
}

window.onload = function init() {
	if (!("lastSearchedCity" in localStorage)) {
		getWeather("Lagos");
	} else {
		const city = localStorage.getItem("lastSearchedCity");
		getWeather(city);
	}
	addListeners();
};
