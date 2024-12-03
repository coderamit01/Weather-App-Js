const apiKey = `5341f3b4f67c822c816bbab17dc83348`;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const searchBtn = document.getElementById('search-btn');
const searchBox = document.querySelector('#searchbox');
// Search city name and get weather data
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getWeatherDetails(searchBox.value);
});
// Get WeatherDetails
const getWeatherDetails = async (city) => {
  const fetchData = await fetch(`${apiUrl} ${city} &appid=${apiKey}&units=metric`);
  const res = await fetchData.json();
  const temp = document.querySelector('.temp');
  const cityName = document.querySelector('.city');
  console.log(res);
}
