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
  feelsLike.innerHTML = Math.round(response.data.temperature.feels_like);
  let timeElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
}

function searchCity(city) {
  let apiKey = "8fdc962ca4f99b40401bo349tfa59399";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(tempreture);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
function formatDate(date) {
  let days = [
    "Satarday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
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
  return `${day}`;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", handleSearchSubmit);
searchCity("kabul");
