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
