// To save time and space, use loops using DRY. DRY = Don't Repeat Yourself
// Simmalar to an if statment in syntax
// Count ++ only adds one. count+=_ gives you skips. Don't forget that code though, as that would create an infinite loop.


// Print all numbers between -10 & 19
var firstQ = -10

while (firstQ <= 19) {
console.log(firstQ);
firstQ++;
}

// Print all even numbers between 10 & 40

var secondQ = 10;

while (secondQ <= 40) {
console.log(secondQ);
firstQ+=2;
}