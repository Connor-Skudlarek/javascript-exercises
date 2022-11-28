const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if (arr == []){
    return 0
  }
  let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  console.log(total)
  return total
};

const multiply = function(arr) {
  let total = arr.reduce((accumulator, currentValue) => accumulator*currentValue, 1)
  return total
};

const power = function(base, exponent) {
	if(exponent == 1){
    return base
  }
  return base * power(base, exponent-1)
};

const factorial = function(num) {
	if(num == 1){
    return 1
  } else if (num == 0){
    return 1
  } else {
    return num * factorial(num - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
