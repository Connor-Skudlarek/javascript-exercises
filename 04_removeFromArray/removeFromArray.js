const removeFromArray = function(arr, ...args) {
    let newArr = arr;
    let j = 0;
    for (let i = 0; i < newArr.length; i++){
        for (item in args){
            if (newArr[i] === args[item]){
                newArr.splice(i,1);
            }
        }
    }
    console.log(newArr);
    return newArr;
    // Create an array that can be editted without losing original information
    // Loop over items in array.
    // If an item is in args, remove from array.
};
removeFromArray([1, 2, 3], 3)
// Do not edit below this line
module.exports = removeFromArray;
