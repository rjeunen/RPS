//global vavriables
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

/**
 * to test function
 * getComputerChoice();
 * console.log(computerSelection);
 * console.log(getComputerChoice());
 */

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

/**
 * To test function:
 * console.log(getHumanChoice());
 */

//play a round

/**
 * To test scores:
 * console.log(humanScore);
 * console.log(computerScore);
 */

//play game
function playGame(){

    let humanScore = 0;
    let computerScore = 0;

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

    for(i = 0; i < 5; i++){
        //variables for the humanChoice and computerChoice
        const humanSelection =  getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        let result = "Player: " + humanScore + "\nComputer: " + computerScore;
        console.log(result);
    }
    
}

playGame();
