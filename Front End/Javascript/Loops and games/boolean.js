//To turn a prompt into a number, go  [var age = prompt ("How old are you?")]
var age = Number(prompt("How old are you?"))
// If
if(age < 0) {
    alert ("ERR.AGE.NT.VLD")
    }

if(age < 18) {
console.log ("You are not old enough to enter this place")
}

// Else If
else if(age < 19) {
    console.log ("You are old enough to enter this place, but cannot eat jello")
    }

     else if(age === 19) {
        console.log ("You are old enough to enter this place, and we'll give you a free moonshine")
        }
// Else
else {
    console.log ("You are old enough to enter this place and eat jello")
    }