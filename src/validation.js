import getMap from './index';

function validateForm () {
  const getField = document.getElementById('input').value;
  if (getField === '') {
    alert("This field can't be empty");
    return false;
  }
}

export default validateForm;