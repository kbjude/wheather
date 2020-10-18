import _ from 'lodash';

const result = document.createElement('div');
const button = document.createElement('button');
button.setAttribute('content', 'Get API content');

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
document.body.appendChild(result);
const getButton = document.getElementById('extract-weather');

const show = document.querySelector('display');
async function getMap() {
  try {
    const wmap = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d2891a5855e57f4b4703267ed739a6ba', { mode: 'cors' });
    const wdata = await wmap.json();
    show.innerHTML = wdata;
  } catch (err) {
    return err;
  }
}
getButton.addEventListener('click', getMap);