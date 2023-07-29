var requestUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=27188ffde4e8c2e5bf4b2ab0515b5ddc";
var requestUrlGeo =
  "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=27188ffde4e8c2e5bf4b2ab0515b5ddc";
const apiKey = "27188ffde4e8c2e5bf4b2ab0515b5ddc";

const searchBtn = document.querySelector(".search");
const searchCity = document.querySelector("#searchcity");

searchBtn.addEventListener("click", function () {
  const city = searchCity.value;

  const queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  fetch(queryUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(displayWeatherData)
    .catch(function (error) {
      console.log("Looks like there was a problem: \n", error);
    });
});

function displayWeatherData(data) {
  if (!data.city || !data.list) {
    console.error("Unexpected API response", data);
    return;
  }

  var cityElem = document.getElementById("cities");

  cityElem.textContent = data.city.name;

  for (let i = 0; i < 5; i++) {
    var weatherData = data.list[i * 8];
    var date = new Date(weatherData.dt * 1000);
    var dayElem = document.getElementById("day" + (i + 1));

    dayElem.querySelector(".date").textContent = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    dayElem.querySelector(
      "#img" + (i + 1)
    ).src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    dayElem.querySelector(
      "#day" + (i + 1) + "Min"
    ).textContent = `Temp: ${weatherData.main.temp_min} °C`;
    dayElem.querySelector(
      "#day" + (i + 1) + "Max"
    ).textContent = `Temp: ${weatherData.main.temp_max} °C`;
  }
}











