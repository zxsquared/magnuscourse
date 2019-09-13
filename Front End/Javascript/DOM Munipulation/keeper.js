// Button VAR's
var p1Button = document.querySelector("#p1")
var p2Button = document.querySelector("#p2")
var resetButton = document.getElementById("reset")
var numInput = document.querySelector("input")
var winningScoreDisplay = document.querySelector("p span");
// Display VAR's
var p1Display = document.getElementById("p1Display")
var p2Display = document.getElementById("p2Display")
// Score VAR's
var p1Score = 0;
var p2Score = 0;
// Game VAR's
var gameOver = false;
var winningScore = 5;


// DOM Events for P1
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner")
        }
        p1Display.textContent = p1Score;
    }
})

// DOM Events for P2

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner")
        }
        p2Display.textContent = p2Score;
    }
})

// DOM Events for Reset button

resetButton.addEventListener("click", function(){
   reset()
})

function reset(){
    p1Score = 0;
    p2Score = 0; 
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = Number(this.value)
    winningScore = Number(this.value)
    reset()
})