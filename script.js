function getWeather(city) {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0ad3df4030a233c298c8cf93b05395a7&lang=ru";
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            let weatherDescription = response.weather[0].description;
            document.getElementById("weather").innerHTML = "Погода: " + weatherDescription;
            console.log(response);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
function changeCity() {
    let city = prompt("Введите название города", "");
    getWeather(city);
}
getWeather("Ivanovo");