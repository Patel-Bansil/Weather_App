let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weather_icon = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");

let search = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");

let apikey = "1ed39f64b043787d0d0527dbaba51584";
let apiurl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
// let apiurl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apikey}`;

const weatherCheck = async (value) => {
  let response = await fetch(apiurl + value + `&appid=${apikey}`);
  let data = await response.json();
  console.log(data);
  
  city.innerHTML = data.name + " , " + data.sys.country;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main == "Clouds"){
    weather_icon.src = "./images/sun-cloud.png";
  }else if(data.weather[0].main == "Clear"){
    weather_icon.src = "./images/clear.png";
  }else if(data.weather[0].main == "Rain"){
    weather_icon.src = "./images/rain.png";
  }else if(data.weather[0].main == "Mist"){
    weather_icon.src = "./images/Mist.png";
  }else if(data.weather[0].main == "Snow"){
    weather_icon.src = "./images/snow.png";
  }else if(data.weather[0].main == "Drizzle"){
    weather_icon.src = "./images/Drizzel.png";
  }
};

searchbtn.addEventListener("click", () => {
    weatherCheck(search.value);
    search.value = ""; // Clear the input field after search
    weather.style.display = "block"; // Show the weather information
})
