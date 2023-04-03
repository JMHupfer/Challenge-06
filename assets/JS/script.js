var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=27188ffde4e8c2e5bf4b2ab0515b5ddc"
var requestUrlGeo = "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=27188ffde4e8c2e5bf4b2ab0515b5ddc"
var apiKey = "27188ffde4e8c2e5bf4b2ab0515b5ddc"
var city = []
var inputElement = document.querySelector("#searchcity")
var searchButton = document.querySelector(".search")

console.log(searchButton)

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputElement.value);
    getCurrentWeather(inputElement.value);
}) 

function getCurrentWeather(city){
   var URL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=27188ffde4e8c2e5bf4b2ab0515b5ddc" 
   fetch(URL)
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       console.log(data[0].lat);
       console.log(data[0].lon);
       getWeather(data[0].lat, data[0].lon)
   });
}

function getWeather(lat, lon){
    var URL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=27188ffde4e8c2e5bf4b2ab0515b5ddc&units=metric"
    fetch(URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

// var cityTemp = document.getElementById("temp").textContent
// var cityHumidity = document.getElementById("humidity").textContent
// var cityWind = document.getElementById("wind").textContent

// var cityTemp2 = document.getElementById("temp2").textContent
// var cityHumidity2 = document.getElementById("humidity2").textContent
// var cityWind2 = document.getElementById("wind2").textContent

document.getElementById("temp").textContent = data.temp







