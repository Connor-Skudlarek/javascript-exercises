const leapYears = function(year) {
    if(year % 4 == 0 && year % 400 == 0){
        return "Leap year"
    } else if (year % 100 == 0){
        return "Not a leap year"
    } else if (year % 4 == 0){
        return "Leap year"
    } else {
        return "Not a leap year"
    }
};
console.log(leapYears(1600))
// Do not edit below this line
module.exports = leapYears;
