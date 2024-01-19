const citydisplay = document.querySelector("#city");
const tempdisplay = document.querySelector("#temp");
const humid = document.querySelector("#humid");
const wind = document.querySelector("#wind");
const search = document.querySelector(".fa-magnifying-glass");
const weatherimg = document.querySelector("#weatherpic");
search.addEventListener("click", updateWeather);

function updateWeather() {
  const city = document.querySelector("#serchBox").value;
  const APIkey = "8fe6351649ddff3f88f29314ebbf7e3b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
  &appid=${APIkey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.weather[0].main);
      if (data.cod === "404") {
        citydisplay.textContent = "--__--  not found...";
        tempdisplay.textContent = "---";
        humid.textContent = "---";
        wind.textContent = "---";
      } else {
        citydisplay.textContent = data.name;
        tempdisplay.textContent = Math.round(data.main.temp) + " °C";
        humid.textContent = data.main.humidity + " %";
        wind.textContent = data.wind.speed + " Km/h";
        weatherimg.setAttribute("src", `images/${data.weather[0].main}.png`);
      }
    })
    .catch((error) => {
      console.log(`error ${error}`);
    });
}
