async function getCityInfo(){
  const city =document.getElementById("search-loco").value;
  const apiKey = "8f530d72fd0c60c1c28120ad610c41be";  // Replace with your OpenWeatherMap API key

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
 
}
getCityInfo()

let city = document.getElementById("search-loco").value;

console.log(city);


