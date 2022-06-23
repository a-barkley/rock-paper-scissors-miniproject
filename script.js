var wins = 0;
var losses = 0;
var ties = 0;

let choices = ["Rock", "Paper", "Scissors"]

let playerChoice = prompt("Rock, Paper, or Scissors?");

var computerChoice(Math.floor(Math.random(3)));

if (playerChoice === computerChoice) {
    return "It's a tie!"
} 

if (playerChoice === "Rock" && computerChoice === "Paper") {
    return "You lost!"
} 

if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return "You won!"
}

if (playerChoice === "Paper" && computerChoice === "Rock") {
    return "You won!"
} 

if (playerChoice === "Paper" && computerChoice === "Scissors") {
    return "You lost!"
} 

if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return "You won!"
} 

if (playerChoice === "Scissors" && computerChoice === "Rock") {
    return "You lost!"
} 

