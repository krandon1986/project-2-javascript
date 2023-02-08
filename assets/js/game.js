/**
 * Declare constants for DOM elements
 * and possible choice
 */
const buttons = document.getElementsByClassName("btn");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("game-stats");
const choices = ["rock", "paper", "scissor"];

/**
 * Add the event listener to all the three buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}
