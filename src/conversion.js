const conversion = (() => {
  const celsiusToFahrenheit = (celsius) => {
    const newTemp = (celsius * (9 / 5)) + 32;
    return newTemp;
  };
  return {
    celsiusToFahrenheit,
  };
})();

export default conversion;