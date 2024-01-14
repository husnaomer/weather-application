function tempreture(response) {
  console.log(response);
  let temp = document.querySelector("#temp");

  temp.innerHTML = Math.round(response.data.temperature.current);

  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let Humidity = document.querySelector("#Humidity");
  let humidity = response.data.temperature.humidity;
  Humidity.innerHTML = `${humidity} %`;
  let windElement = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = `${wind} km/h`;
  let feelsLike = document.querySelector("#feels-like");

  let FeelLike = Math.round(response.data.temperature.feels_like);
  feelsLike.innerHTML = `${FeelLike} °C`;
  let timeElement = document.querySelector("#time");

  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);

  let img = document.querySelector("#img");
  img.innerHTML = `<img src="${response.data.condition.icon_url}" class="img"/>`;
  getForecast(response.data.city);
}

function searchCity(city) {
  let apiKey = "8fdc962ca4f99b40401bo349tfa59399";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(tempreture);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satarday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function getForecast(city) {
  let apiKey = "8fdc962ca4f99b40401bo349tfa59399";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(dispalyForecast);
}

function dispalyForecast(response) {
  console.log(response.data);
  let forecastElement = document.querySelector("#forecast");
  let days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
         <div class="weather-forecast-day">
            <div class="weather-forecast-day">${day}</div>
            <div class="weather-forecast-icon">☀️</div>
            <div class="weather-forecast-temperature">
              <span class="weather-forecast-tempreature-max"
                ><strong>12°</strong></span
              >
              <span class="weather-forecast-tempreature-min"> 9°</span>
            </div>
          </div>
         `;
  });

  forecastElement.innerHTML = forecastHtml;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", handleSearchSubmit);
searchCity("kabul");
dispalyForecast();
