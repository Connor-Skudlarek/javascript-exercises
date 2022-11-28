const sumAll = function(num1, num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        if(num1 < 0 || num2 < 0){
            return "ERROR"
        }
        else if (num1 > num2){
            return (num1 - num2 + 1)*(num1 + num2)/2
        } else {
            return (num2 - num1 + 1)*(num2 + num1)/2
        }
    } else {
        return "ERROR"
    }
};

console.log(sumAll(10, [90, 1]))
// Do not edit below this line
module.exports = sumAll;
