// function isEven(num) {
// if (num % 2 === 0){
// return true;
// }
// else {
//     return false;
// }
// }

function isEven(num) {
return num % 2 === 0
}
    
function factorial(num) {
    // define a result var
    var result = 1;
    // calculate factorial
    for(var i = 2; i <= num; i++) {
        result *= i; 
    }
    // return the result var
    return result
}

function kebabtoSnake(str) {
// IMPORTANT!!!
var newStr = str.replace(/-/g , "_")
return newStr;
}
