import _ from 'lodash';

const searchfield = document.querySelector('#input');
const searchButton = document.querySelector('#extract-weather');
const name = document.querySelector('.name');
const description = document.querySelector('.desc');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
// document.body.appendChild(result);
const getButton = document.getElementById('extract-weather');

const show = document.querySelector('display');
async function getMap() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchfield.value}&APPID=d525220abdcad907f9e83654cb6f042d`, { mode: 'cors' });
    const json = await response.json();
    const nameValue = json.name;
    const tempValue = json.main.temp;
    const descdata = json.weather[0].description;

    name.innerHTML = nameValue;
    temperature.innerHTML = tempValue;
    description.innerHTML = descdata;
  } catch (err) {
    return err;
  }
}
getButton.addEventListener('click', getMap);