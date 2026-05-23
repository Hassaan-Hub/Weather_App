 async function getData() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=392fc470c1ac8b42b2f40951a9a96cc4&q=karachi&units=metric`);
    const data = await response.json();
    console.log(data);
    return data;x   
}

var weadBox = document.getElementById("weatherResult")
var taytaty = document.getElementById("taytay")
getData().then(data => {
    taytaty.innerHTML = ` <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.main.temp}°C</h3>
                <h3>${data.main.humidity}%</h3>
                <h4>${data.weather[0].description.toUpperCase()}</h4>`
});
var city = document.getElementById("cityInput")
function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=392fc470c1ac8b42b2f40951a9a96cc4&q=${city.value}&units=metric`)
        .then(function (result) {
            return result.json()
        })
        .then(function (data) {
            if (data.cod == "404") {
                weadBox.innerHTML = `<h1>${data.message}</h1>`
                return;
            }
            weadBox.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.main.temp}°C</h3>
                <h3>${data.main.humidity}%</h3>
                <h4>${data.weather[0].description.toUpperCase()}</h4>
            `
        })
        .catch(function (error) {
            console.log(error);
        })

    city.value = ""
}