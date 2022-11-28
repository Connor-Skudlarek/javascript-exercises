const convertToCelsius = function(temp) {
  let celsiusTemp = Math.trunc((temp-32)/1.8*10)/10;
  return celsiusTemp
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = Math.trunc((temp*1.8 + 32)*10)/10;
  return fahrenheitTemp
};

console.log(convertToCelsius(-40),convertToFahrenheit(-40))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
