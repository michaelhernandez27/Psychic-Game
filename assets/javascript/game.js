var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var guessedLetters = [];

var win = 0;
 
var lose = 0;

var guesses = 10;

var winText = document.getElementById("win-text");
var loseText = document.getElementById("lose-text");
var guessText = document.getElementById("guess-text");
var guessLeft = document.getElementById("guess-left");


var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);


var reset = function () {
    guesses = 10;
    guessedLetters = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
}


document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();
    console.log(userGuess);

    if (guesses === 0) {
        alert("The computer guess was " + computerGuess + " try again!!!");
        lose++;
        reset();
    }


    else if (computerGuess === userGuess) {
        win++;
        guess = 10;
        guessedLetters.push(userGuess);
        alert("Good Job! You guessed correct");
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        reset();
    }


    else if (computerGuess !== userGuess) {
        guesses--;
        guessedLetters.push(userGuess);
        alert("Guess again!");
    }


    winText.textContent = "Wins: " + win;
    loseText.textContent = "Losses: " + lose;
    guessText.textContent = "Guesses: " + guesses;
    guessLeft.textContent = guessedLetters;
};