const apiKey = "033479d51f39ec4fca57620ec8379545"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".searchBar input")
const searchBtn = document.querySelector(".searchBar button")
const weatherImg = document.querySelector(".weatherImg")
const weatherMain = document.querySelector(".weather")
const errors = document.querySelector(".error p")


async function cheackWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`) // it will fetch api from the website

    if (response.status == 404) {
        errors.style.display = "block"
    }
    else {
        var data = await response.json(); 
        // it will convert the fetched api to Json format ,which is supported by javascript

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherImg.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherImg.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherImg.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png"
        }

        weatherMain.style.display = "block";
    }
}

searchBtn.addEventListener('click', () => {
    cheackWeather(searchBox.value);
})


