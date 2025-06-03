async function getCityInfo() {
  const city = document.getElementById("search-loco").value;
  const apiKey = "8f530d72fd0c60c1c28120ad610c41be";

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  const lat = data[0].lat;
  const lon = data[0].lon;

  const dataurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const datares = await fetch(dataurl);
  const newdata = await datares.json();
  console.log(data)

  document.getElementById("temperature").innerText = `${(newdata.main.temp - 273.15).toFixed(1)}°C`;
  document.getElementById("weather-type").innerText = newdata.weather[0].main;
  document.getElementById("city").innerText = newdata.name;
  document.getElementById("feelsLike").innerText = `${(newdata.main.feels_like - 273.15).toFixed(1)}°C`;
  document.getElementById("pressure").innerText = `${newdata.main.pressure} hPa`;
  document.getElementById("temp-min").innerText = `${(newdata.main.temp_min - 273.15).toFixed(1)}°C`;
  document.getElementById("temp-max").innerText = `${(newdata.main.temp_max - 273.15).toFixed(1)}°C`;
  document.getElementById("sunrise").innerText = new Date(newdata.sys.sunrise * 1000).toLocaleTimeString();
  document.getElementById("sunset").innerText = new Date(newdata.sys.sunset * 1000).toLocaleTimeString();
  document.getElementById("visibility").innerText = `${(newdata.visibility / 1000).toFixed(1)} km`;
  document.getElementById("clouds").innerText = `${newdata.clouds.all}%`;
  document.getElementById("seaLevel").innerText = newdata.main.sea_level ? `${newdata.main.sea_level} hPa` : "N/A";
  document.getElementById("groundLevel").innerText = newdata.main.grnd_level ? `${newdata.main.grnd_level} hPa` : "N/A";
  document.getElementById("wind").innerText = `${newdata.wind.speed} km/h`;
  document.getElementById("humidity").innerText = `${newdata.main.humidity}%`;
  document.getElementById("weather-logo").src = `http://openweathermap.org/img/wn/${newdata.weather[0].icon}@2x.png`

}
