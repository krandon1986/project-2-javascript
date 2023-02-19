// Selecting elements
const playerScore = document.getElementById("playerscore");
const computerScore = document.getElementById("computerscore");
const buttons = document.querySelectorAll(".btn");
const playerIcon = document.querySelectorAll(".show-player");
const computerIcon = document.querySelectorAll(".show-computer");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

//Storing the score
let computerscore = 1;
let playerscore = 1;

const rockIcon = "rock";
const paperIcon = "paper";
const scissorIcon = "scissor";

const choices = [rockIcon, paperIcon, scissorIcon]; 
const message = document.getElementById("game-stats");

const tie = ()=>{
    message.innerHTML = "Tie !";
    message.style.color = 'orange';
}

const win = ()=>{
    message.innerHTML = "Player Won !";
    message.style.color = 'green';
}

const lose = ()=>{
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

function updateScore() {
    //If it is a tie 
        if(playerIcon.className == computerIcon.className){
                playerScore.innerHTML = playerScore.innerHTML;
                computerScore.innerHTML = computerScore.innerHTML;
                tie();
                }

    //* If it is not a tie
        else if(playerIcon.className == rockIcon && computerIcon.className == scissorIcon){
                playerscore++;
                playerScore.innerHTML = playerscore;
                win();
            }else if(playerIcon.className == rockIcon && computerIcon.className == paperIcon){
                computerscore++;
                computerScore.innerHTML = computerscore;
                lose();
            }else if(playerIcon.className == paperIcon && computerIcon.className == scissorIcon){
                computerscore++;
                computerScore.innerHTML = computerscore;
                lose();
            }else if(playerIcon.className == paperIcon && computerIcon.className == rockIcon){
                playerscore++;
                playerScore.innerHTML = playerscore;
                win();
            }else if(playerIcon.className == scissorIcon && computerIcon.className == rockIcon){
                computerscore++;
                computerScore.innerHTML = computerscore;
                lose();
            }else if(playerIcon.className == scissorIcon && computerIcon.className == paperIcon){
                playerscore++;
                playerScore.innerHTML = playerscore;
                win();
            }
        }



