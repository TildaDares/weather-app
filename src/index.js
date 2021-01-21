function searchListener() {
	document
		.querySelector(".search-btn")
		.addEventListener("click", getCityWeather);
}

function getCityWeather() {
	const searchText = document.querySelector(".search-text").value;
	if (searchText !== '') {
		console.log(searchText);
	}
}

searchListener();
