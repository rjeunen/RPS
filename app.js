//global vavriables
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const result = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click", () => {
    console.log("testing rock button");
    const humanSelection = "rock";
    const computerselection = getComputerChoice();
    playRound(humanSelection, computerselection);
});

buttonPaper.addEventListener("click", () => {
    console.log("testing paper button");
    const humanSelection = "paper";
    const computerselection = getComputerChoice();
    playRound(humanSelection, computerselection);
});

buttonScissors.addEventListener("click", () => {
    console.log("testing scissors button");
    const humanSelection = "scissors";
    const computerselection = getComputerChoice();
    playRound(humanSelection, computerselection);
});

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
        let pResult = document.createElement("p");
        pResult.textContent = `It's a draw, you both choose ${humanChoice}!`;
        result.appendChild(pResult);
    }
    else if(humanChoice == "paper" && computerChoice == "rock" 
        || humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "scissors" && computerChoice == "paper"){
            let pResult = document.createElement("p");
            pResult.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
            result.appendChild(pResult);
            humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "scissors" && computerChoice == "rock"){
            let pResult = document.createElement("p");
            pResult.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
            result.appendChild(pResult);
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
