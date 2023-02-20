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
    
    if (ComNum == 0){
        computerChoice = "rock";
    }
    else if (ComNum == 1){
        computerChoice= "paper";
    }else if (ComNum == 2){
        computerChoice = "scissor";
    }
    return ComNum;
}

function roundplay (){
    let vic_Array = [[0, 2, 1],
                    [1, 0, 2],
                    [2, 1, 0]];
    let result = vic_Array[playerChoiceInt] [computerChoiceInt];
    if (result == 0){
    message.innerHTML = "Tie !";
    message.style.color = 'orange';
    }
    else if (result == 1){
    message.innerHTML = "Player Won !";
    message.style.color = 'green';
    playerscore++;
    }
    else if (result == 2){
    message.innerHTML = "Computer Won !";
    message.style.color = 'red';
    computerscore++;
    }
}

function playGame(){
    message.textContent = "Score five points to win!";
    roundplay();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5){
        window.location.href = "won.html";
    }
    else if (computerScore == 5){
        window.location.href = "loss.html";
    }
}