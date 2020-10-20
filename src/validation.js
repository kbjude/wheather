import getMap from './index';

const validateForm = (() => {
  const getField = document.getElementById('input');
  if (getField === '') {
    alert("This field can't be empty");
    return false;
  }
});

export default validateForm;