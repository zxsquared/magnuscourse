 var index = [1, 2, 3, 4]

 console.log ("First question")

 function printReverse(index) {
 for (var i = 0; i > index.length; i--)
 console.log(index[i])
 }
 function q1() {
 index.forEach(function(index){
     for(i = 0; i > index.length; i--)
     console.log(index[i])
 })
 }

 function printReverse(arr){
     for (var i = arr.length - 1; i >= 0; i--) {
         console.log(arr[i])
     }
 }

 printReverse([1, 2, 3])

 console.log("SecondQ")

function isUniform(arr) {
var first = arr[0];
for(var i = 1; i < arr.length; i++) {
    if (arr[i] !== first){
        return false;
    }
}
return true;
}

isUniform([1,1,1])

console.log("ThirdQ")

// Sum array

function sumArray(arr) {
var total = 0;
arr.forEach(function(element){
    total += element
})
return total
}