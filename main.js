const apiKey = `5341f3b4f67c822c816bbab17dc83348`;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=5341f3b4f67c822c816bbab17dc83348&units=metric';

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getWeatherDetails();
});

const searchBox = document.querySelector('#searchbox')

const getWeatherDetails = async () => {
  const fetchData = await fetch(apiUrl);
  const res = await fetchData.json();
  console.log(res);
}
