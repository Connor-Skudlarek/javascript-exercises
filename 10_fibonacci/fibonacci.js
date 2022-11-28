const fibonacci = function(num) {
 num = parseInt(num);
 if (Number.isInteger(num) && num > 0){
    if(num == 1 || num == 2){
        return num
    } else {
        let counter = 2;
        let priorNum = 1;
        let currentNum = 1;
        let nextNum;
        while (counter != num){
            nextNum = priorNum + currentNum;
            priorNum = currentNum;
            currentNum = nextNum;
            counter++ 
        }
        return nextNum
    }
 } else if (Number.isInteger(num) && num <= 0){
    return "OOPS"
 } else {
    return "ERROR"
 }
};

// Do not edit below this line
module.exports = fibonacci;
