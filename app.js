//global vavriables
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const pResult = document.createElement("p");
const runningScore = document.querySelector(".runningScore");
const scoreHuman = document.createElement("p");
const scoreComputer = document.createElement("p");
const pWinner = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerselection = getComputerChoice();
    playRound(humanSelection, computerselection);
});

buttonPaper.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerselection = getComputerChoice();
    playRound(humanSelection, computerselection);
});

buttonScissors.addEventListener("click", () => {
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
        pResult.textContent = `It's a draw, you both choose ${humanChoice}!`;
        result.appendChild(pResult);
        scoreHuman.textContent =  `Player: ${humanScore}`;
        scoreComputer.textContent = `Computer: ${computerScore}`;
        runningScore.appendChild(scoreHuman);
        runningScore.appendChild(scoreComputer);
        checkWinner();
    }
    else if(humanChoice == "paper" && computerChoice == "rock" 
        || humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "scissors" && computerChoice == "paper"){
            pResult.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
            result.appendChild(pResult);
            humanScore++;
            scoreHuman.textContent =  `Player: ${humanScore}`;
            scoreComputer.textContent = `Computer: ${computerScore}`;
            runningScore.appendChild(scoreHuman);
            runningScore.appendChild(scoreComputer);
            checkWinner();        
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "scissors" && computerChoice == "rock"){
            pResult.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
            result.appendChild(pResult);
            computerScore++;
            scoreHuman.textContent =  `Player: ${humanScore}`;
            scoreComputer.textContent = `Computer: ${computerScore}`;
            runningScore.appendChild(scoreHuman);
            runningScore.appendChild(scoreComputer);
            checkWinner();
    }
    else{
        console.log(`You did not enter a valid choice!`);
    }
}

function checkWinner(){
    if(humanScore === 5){
        pWinner.textContent = `Congrats! You won ${humanScore} VS ${computerScore}`;
        result.appendChild(pWinner);
    }
    if(computerScore === 5){
        pWinner.textContent = `Oops, you lost! ${computerScore} VS ${humanScore}`;
        result.appendChild(pWinner);
    }
}
