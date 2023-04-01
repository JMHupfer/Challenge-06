var APIKey = "27188ffde4e8c2e5bf4b2ab0515b5ddc";
var city;

function weatherByCity(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
    .then(function (response) { 
        return response.json();
    })
    .then(function(data){
        console.log(response);
    })
    .catch(function() {
    })    
}

window.onload = function() {
    weatherByCity( 6167865 );
}