function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3) + 1;

    if(computerChoice == 1){
        return "rock";
    } else if(computerChoice == 2){
        return "paper";
    } else if(computerChoice == 3){
        return "scissors";
    } else {
        return "error";
    }
};
console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    if(humanChoice == "rock" || humanChoice == "Rock"){
        return "rock";
    } else if(humanChoice == "paper" || humanChoice == "Paper"){
        return "paper";
    } else if(humanChoice == "scissors" || humanChoice == "Scissors"){
        return "scissors";
    } else{
        return "error";
    }
};
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
