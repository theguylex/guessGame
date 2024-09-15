function startGame() {
    const randomNumber = Math.floor(Math.random() * 11);
    let userGuess = null;

    while (userGuess === null || userGuess < 0 || userGuess > 10 || isNaN(userGuess)) {
        userGuess = prompt("Guess a number between 0 and 10:");
        userGuess = Number(userGuess); 
    }

    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number: " + randomNumber);
    } else {
        alert("Sorry, the correct number was: " + randomNumber);
    }

    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        startGame();
    } else {
        alert("Thank you for playing!"); 
    }
}

startGame();