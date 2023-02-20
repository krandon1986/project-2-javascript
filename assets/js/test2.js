let computerChoice;
let playerChoice;
let computerChoiceInt = 0;
let playerChoiceInt = 0;
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const buttons = document.querySelectorAll(".btn");
const rockIcon = "rock";
const paperIcon = "paper";
const scissorIcon = "scissor";
const choices = [rockIcon, paperIcon, scissorIcon]; 

let computerscore = 1;
let playerscore = 1;

const player = document.querySelector(".playerscore");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector(".computerscore");
computer.textContent = `Computer Score: ${computerScore}`;

const message = docment.querySelector(".game-stats");
message.textContent = "Score five points to win!";

buttons.forEach((button)=>{button.addEventListeners('click', ()=>{
    
    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    playerChoice = button.class;
    if (playerChoice == "rock"){
        playerChoiceInt = 0;
    }
    else if (playerChoice == "paper"){
        playerChoiceInt = 1;
    }
    else if (playerChoice == "scissor"){
        playerChoiceInt = 2;
    }


    computerChoiceInt = computerplay(computerChoice);
    playGame();
})
    
})

function computerplay(computerChoice){
    let ComNum = Math.floor(Math.random() * 3);
    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];
    
    if (ComNum == 0){
        computerChoice = "rock";
    }
    else if (ComNum == 1){
        computerChoice = "paper";
    }else if (ComNum == 2){
        computerChoice = "scissor";
    }
    return ComNum;
}

