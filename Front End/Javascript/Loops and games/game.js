// Create a secret number

var secretNumber = 4;

// ask user for guess

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is right

if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!")
}

else if (guess > secretNumber) {
alert("That guess is too high")
}

else {
    alert("That guess is too low")
    }

// Use typeof keyword to check what type of way your doing things (number, string)