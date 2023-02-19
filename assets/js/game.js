/**
 * Declare constants for DOM elements
 * and possible choice
 */
const buttons = document.getElementsByClassName("btn");
const playerScore = document.getElementById("playerscore");
const computerScore = document.getElementById("computerscore");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("game-stats");
const rockIcon = "rock";
const paperIcon = "paper";
const scissorIcon = "scissor";
const choices = [rockIcon, paperIcon, scissorIcon]; 
const playerIcon = document.querySelectorAll(".show-player");
const computerIcon = document.querySelectorAll(".show-computer");

/**
 * Displaying the victory of either the player or the computer
 */
let computerscore = 1;
let playerscore = 1;

const tie = () =>{
    message.innerHTML = "Tie !";
    message.style.color = 'orange';
}

const win = () =>{
    message.innerHTML = "Player Won !";
    message.style.color = 'green';
}

const lose = () =>{
    message.innerHTML = "Computer Won !";
    message.style.color = 'red';
}

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


/*Scoring */
function checkwinner() {
    /* If it is a tie */
    if(playerIcon.className === computerIcon.className){
    playerScore.innerHTML = playerScore.innerHTML;
    computerScore.innerHTML = computerScore.innerHTML;
    tie();
    }

    /* If it is not a tie */
    else if(playerIcon.className === rockIcon && computerIcon.className === scissorIcon){
    playerScore.innerHTML = playerscore;
    playerScore++;
    win();
    }else if(playerIcon.className === rockIcon && computerIcon.className === paperIcon){
    computerScore.innerHTML = computerscore;
    computerscore++;
    lose();
    }else if(playerIcon.className === paperIcon && computerIcon.className === scissorIcon){
    computerScore.innerHTML = computerscore;
    computerscore++;
    lose();
    }else if(playerIcon.className === paperIcon && computerIcon.className === rockIcon){
    playerScore.innerHTML = playerscore;
    playerscore++;
    win();
    }else if(playerIcon.className === scissorIcon && computerIcon.className === rockIcon){
    computerScore.innerHTML = computerscore;
    computerscore++;
    lose();
    }else if(playerIcon.className === scissorIcon && computerIcon.className === paperIcon){
    playerScore.innerHTML = playerscore;
    playerscore++;
    win();
    }
}

