const apiKey = `5341f3b4f67c822c816bbab17dc83348`;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBtn = document.getElementById('search-btn');
const searchBox = document.querySelector('#searchbox');
// Search city name and get weather data
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getWeatherDetails(searchBox.value);
});
// Get WeatherDetails
const getWeatherDetails = async (city) => {
  const fetchData = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);
  const res = await fetchData.json();
  const temp = document.querySelector('.temp');
  const cityName = document.querySelector('.city');
  const humidity = document.querySelector('.hm'); 
  const wind = document.querySelector('.wn'); 

  temp.innerHTML = Math.round(res.main.temp) + ' °C';
  cityName.innerHTML = res.name;
  humidity.innerHTML = res.main.humidity + ' %';
  wind.innerHTML = res.wind.speed + ' km';















  console.log(res);
}
