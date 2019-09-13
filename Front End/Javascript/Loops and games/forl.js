// How to write a for loop


// for (var i = 0; i <= 5; i++) {
//     console.log(i)
// }

console.log ("Print all numbers from -10 to 19")

for (var one = -10; one <= 19; one++)  {
console.log (one)
}

console.log ("Print all even numbers from 10 to 40")

for (var two = 10; two <= 40; two+=2)  {
    console.log (two)
    }

console.log ("Print all odd numbers from 300 to 333")

for (var t = 301; t <= 333; t+=2)  {
    console.log (t)
    }

console.log ("Print all numbers divisabe by 5 and 3 from 5 to 50")

for (var f = 5; f <= 50; f++)  {
    if (f % 3 === 0 && f % 5 === 0) {
    console.log (f)
    }
    }