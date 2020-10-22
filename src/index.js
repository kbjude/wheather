import _ from 'lodash';
import validateForm from './validation';

const searchfield = document.querySelector('#input');
const searchButton = document.querySelector('#extract-weather');
const name = document.querySelector('.name');
const description = document.querySelector('.desc');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const btntoggle = document.querySelector('.toggle');
// const wheatherIcon = document.querySelector('.icon');
const img = document.querySelector('.icon1');

// document.body.appendChild(result);
const getButton = document.getElementById('extract-weather');

const show = document.querySelector('display');

const weatherValues = {

};

async function getMap() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchfield.value}&units=metric&APPID=d525220abdcad907f9e83654cb6f042d`, { mode: 'cors' });
    const json = await response.json();
    const nameValue = json.name;
    const tempValue = json.main.temp;
    const descdata = json.weather[0].description;
    const humid = json.main.humidity;
    weatherValues.nameValue = nameValue;
    weatherValues.tempValue = tempValue;
    weatherValues.descdata = descdata;
    weatherValues.humid = humid;

    name.innerHTML = nameValue;
    temperature.innerHTML = tempValue;
    description.innerHTML = descdata;
    humidity.innerHTML = humid;
    img.src = `https://fernando-bc.com/weather-icons/${json.weather[0].icon}.svg`;
    // wheatherIcon.innerHTML = newImg;
  } catch (err) {
    return err;
  }
  console.log(weatherValues);
  // return weatherValues;
}

const celsiusToFahrenheit = async (celsius) => {
  const newTemp = (celsius * (9 / 5)) + 32;
  return newTemp;
};
console.log(celsiusToFahrenheit(weatherValues.tempValue));

// function toggle() {
//   const temperatureUnit = 'celsius';
//   if (temperatureUnit === undefined) return;
//   if (temperatureUnit === 'celsius') {
//     let fahrenheight = celsiusToFahrenheit(weather.temperature.value);
//     fahrenheight = Math.floor(fahreinheight);
//     btntoggle.innerHTML = `${fahrenheight}o <span>F</span>`;
//     weather.temperature.unit = 'fahrenheight';
//   } else {
//     btntoggle.innerHTML = `${weather.temperature.value}o <span>C</span>`;
//     weather.temperature.unit = 'celsius';
//   }
// }

getButton.addEventListener('click', getMap);

export default getMap;