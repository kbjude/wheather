import conversion from './conversion';

const searchfield = document.querySelector('#input');
const name = document.querySelector('.name');
const description = document.querySelector('.desc');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const btntoggle = document.querySelector('.toggle');
const img = document.querySelector('.icon1');

const getButton = document.getElementById('extract-weather');

const weatherValues = {
  temperatureUnit: 'celcius',
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
    weatherValues.temperatureUnit = 'celsius';
    weatherValues.fahrenheightTempValue = `Temperature: ${conversion.celsiusToFahrenheit(tempValue)} °F`;
    weatherValues.descdata = descdata;
    weatherValues.humid = humid;

    name.innerHTML = nameValue;
    temperature.innerHTML = `Temperature: ${tempValue} °C`;
    description.innerHTML = `Description: ${descdata}`;
    humidity.innerHTML = `Humidity: ${humid}`;
    img.src = `https://fernando-bc.com/weather-icons/${json.weather[0].icon}.svg`;
    return response;
  } catch (err) {
    return err;
  }
}

function toggle() {
  if (weatherValues.temperatureUnit === 'celsius') {
    weatherValues.temperatureUnit = 'fahrenheit';
    temperature.innerHTML = weatherValues.fahrenheightTempValue;
    document.getElementById('display').style.backgroundColor = 'blue';
  } else {
    weatherValues.temperatureUnit = 'celsius';
    temperature.innerHTML = `Temperature: ${weatherValues.tempValue} °C `;
    document.getElementById('display').style.backgroundColor = 'green';
  }
}

btntoggle.addEventListener('click', toggle);
getButton.addEventListener('click', getMap);

export default getMap;