const searchBox = document.getElementById('Search_input');
const searchBtn = document.getElementById('btn');
const WeatherIcon = document.querySelector('#Weather_icon');
const errorBox = document.querySelector('.errorBox');
const data = document.querySelector('.data');


const apiKey = "43d96d48ee77a425862cf86973d537ee";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;


async function checkWeather(city) {

    try {

        if (!city) {
            console.error("Please enter a city name.");
            alert("Please enter a city name.")
            return alert;

        }

        const response = await fetch(apiUrl + "&q=" + encodeURIComponent(city));

        const data = await response.json();

        // console.log(data);

        document.querySelector('.city').innerHTML = data.name;

        document.querySelector('.temp').innerHTML = data.main.temp + "°C";

        document.querySelector('#humidity').innerHTML = Math.round(data.main.humidity) + "%";

        document.querySelector('#wind').innerHTML = data.wind.speed + " Km/h";




        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "../images/clouds.png"
        }

        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "../images/clear.png"
        }

        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "../images/drizzle.png"
        }

        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "../images/mist.png"
        }

        else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "../images/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            WeatherIcon.src = "../images/snow.png"

        }
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
    }
}


searchBtn.addEventListener('click', () => {

    checkWeather(searchBox.value);

});
