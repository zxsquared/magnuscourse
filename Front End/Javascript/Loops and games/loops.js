// To save time and space, use loops using DRY. DRY = Don't Repeat Yourself
// Simmalar to an if statment in syntax
// Count ++ only adds one. count+=_ gives you skips. Don't forget that code though, as that would create an infinite loop.


console.log ("Print all numbers between -10 & 19")
var firstQ = -10

while (firstQ <= 19) {
console.log(firstQ);
firstQ++;
}

console.log ("Print all even numbers between 10 & 40")

var secondQ = 10;

while (secondQ <= 40) {
console.log(secondQ);
secondQ+=2;
}

console.log ("Print all odd numbers between 300 & 333")

var thirdQ = 301;

while (thirdQ <= 333) {
console.log(thirdQ);
thirdQ+=2;
}

console.log ("Print all numbers divisable by 5 and 3 between 5 & 50")

var fourQ = 5;

while (fourQ <= 50) {
if (fourQ % 5 === 0 && fourQ % 3 === 0) {
    console.log(fourQ);
}
fourQ++;
}