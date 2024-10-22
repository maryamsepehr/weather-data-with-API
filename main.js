let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityoutput");
let desOutput = document.getElementById("description");
let tempOutput = document.getElementById("temp");
let windOutput = document.getElementById("wind");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

async function GetWeather() {
  let weatherResult =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
${cityInput.value}&appid=${apiKey}`);
  var jsonResult = await weatherResult.json();
  setInfo(jsonResult);
}

const convertToCel=(value)=>Math.floor(value-273);
const convertToKmperHour=(value)=>Math.floor(value*3.6);


function setInfo(data) {
  let cityName = data["name"];
  let description = data["weather"][0]["description"];
  let temp = data["main"]["temp"];
  let wind = data["wind"]["speed"];
  
  

  cityOutput.innerHTML = `city:       ${cityName}`;
  desOutput.innerHTML =`description:       ${description}`;
  tempOutput.innerHTML = `temperature:      ${convertToCel(temp)}`+ `  c`;
  windOutput.innerHTML = `wind:       ${convertToKmperHour(wind)}` + `   km/h`;
}

addInput.addEventListener("click", GetWeather);
