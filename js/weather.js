const API_KEY = "0cba49d0d66d35e03ba01cc1914edbe9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const cityContainer = document.querySelector("#weather span:last-child");
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = Math.floor(data.main.temp);

      cityContainer.innerText = name;
      weatherContainer.innerText = `${weather} / ${temp}°`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
