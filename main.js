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
  if (!fetchData.ok) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    const res = await fetchData.json();
    const temp = document.querySelector('.temp');
    const cityName = document.querySelector('.city');
    const humidity = document.querySelector('.hm');
    const wind = document.querySelector('.wn');
    const weatherImg = document.querySelector('.weather-img');

    temp.innerHTML = Math.round(res.main.temp) + ' °C';
    cityName.innerHTML = res.name;
    humidity.innerHTML = res.main.humidity + ' %';
    wind.innerHTML = res.wind.speed + ' km';

    if(res.weather[0].main == "Haze") {
      weatherImg.src = '/img/clouds.png';
    }
    else if(res.weather[0].main == "Rain") {
      weatherImg.src = '/img/rain.png';
    }
    else if(res.weather[0].main == "Clouds") {
      weatherImg.src = '/img/clouds.png';
    }
    else if(res.weather[0].main == "Drizzle") {
      weatherImg.src = '/img/drizzle.png';
    }
    else if(res.weather[0].main == "Mist") {
      weatherImg.src = '/img/mist.png';
    }
    else if(res.weather[0].main == "Clear") {
      weatherImg.src = '/img/clear.png';
    }


    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }

}
