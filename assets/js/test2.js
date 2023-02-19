let computerChoice;
let playerChoice;
let computerChoiceInt = 0;
let playerChoiceInt = 0;
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const buttons = document.querySelectorAll(".btn");

let computerscore = 1;
let playerscore = 1;

const player = document.querySelector(".playerscore");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector(".computerscore");
computer.textContent = `Computer Score: ${computerScore}`;