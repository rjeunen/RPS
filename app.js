//global vavriables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3) + 1;

    if(computerSelection == 1){
        return `rock`;
    }
    else if(computerSelection == 2){
        return `paper`;
    }
    else if(computerSelection == 3){
        return `scissors`;
    }
    else{
        return `error - something went wrong!`;
    }
}

function getHumanChoice(){
    let playerChoice = prompt("Make a choice: Rock, Paper or Scissors:");
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice == "rock"){
        return "rock";
    }
    else if(playerChoice == "paper"){
        return "paper";
    }
    else if(playerChoice == "scissors"){
        return "scissors";
    }
    else{
        return "error - something went wrong";
    }
}

//1 round function
function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log(`It's a draw, you both choose ${humanChoice}!`);
    }
    else if(humanChoice == "paper" && computerChoice == "rock" 
        || humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "scissors" && computerChoice == "paper"){
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "scissors" && computerChoice == "rock"){
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
    }
    else{
        console.log(`You did not enter a valid choice!`);
    }
}

//Remove playGame because this plays exactly 5 rounds.
/*
//play game
function playGame(){

    for(i = 0; i < 5; i++){
        //variables for the humanChoice and computerChoice
        const humanSelection =  getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        let result = "Player: " + humanScore + "\nComputer: " + computerScore;
        console.log(result);
    }
    
}
    */

playGame();
