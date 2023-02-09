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
const playerIcon = document.querySelectorAll(".show-player");
const computerIcon = document.querySelectorAll(".show-computer");

/**
 * Add the event listener to all the three buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}


/**
 * The main game function of accepting one paramater,
 * which is the data-choice value of the selected button
 */

function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random()* 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkwinner(choices[computerChoice], choices[playerChoice]);

    updateScore(result);
}

/**
 * Displaying the victory of either the player or the computer
 */


const tie = ()=>{
    message.innerHTML = "Tie !";
    message.style.color = "orange";
}

const win = ()=>{
    message.innerHTML = "Player Won !";
    message.style.color = "green";
}

const lose = ()=>{
    message.innerHTML = "Computer Won !";
    message.style.color = "red";
}

/* If it is a tie */
 if(playerIcon.className === computerIcon.className){
    playerScore.innerHTML = playerScore.innerHTML;
    computerScore.innerHTML = computerScore.innerHTML;
 }

