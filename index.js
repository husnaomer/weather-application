function tempreture(response) {}

let apiKey = "8fdc962ca4f99b40401bo349tfa59399";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=kabul&key=${apiKey}`;
axios.get(apiUrl).then(tempreture);
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", handleSearchSubmit);
