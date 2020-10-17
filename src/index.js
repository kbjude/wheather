import _ from 'lodash';

const result = document.createElement('div');
const button = document.createElement('button');
button.setAttribute('content', 'Get API content')

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
document.body.appendChild(result);
const getButton = document.getElementById('extract-weather');


async function getMap() {
  try {
    const wmap = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=2nbl8h7s2hbDV8ZimbLX9Y9nAO1TCGwo&s=cats', { mode: 'cors' });
    const wdata = await wmap.json();
    console.log (wdata.data.images.origina.url);
  } catch (err) {
    return err;
  }
}
getButton.addEventListener('click', getMap);