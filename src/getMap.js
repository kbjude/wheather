import conversion from './conversion';
import { searchfield, weatherValues, name, temperature, description, humidity, img } from './index';
export async function getMap() {
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
  }
  catch (err) {
    return err;
  }
}
