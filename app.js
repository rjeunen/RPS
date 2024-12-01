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
//console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == "rock"){
        return "rock";
    } else if(humanChoice == "paper"){
        return humanChoice;
    } else if(humanChoice == "scissors"){
        return humanChoice;
    } else{
        return "error";
    }
};
//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`It's a draw.`);
    } else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
    } else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
    } else{
        humanScore++;
        console.log(`You won, ${humanChoice} beats ${computerChoice}`);
    }

    console.log(humanChoice);
    console.log(computerChoice);
};

function playGame(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore);
    console.log(computerScore);
};
/*
for(let i = 0; i < 5; i++){
    playGame();
}
    */
playGame();
