function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let conditionOne = (playerSelection==="paper"&&computerSelection==="rock");
    let conditionTwo = (playerSelection==="rock"&&computerSelection==="scissors");
    let conditonThree =(playerSelection==="scissors"&&computerSelection==="paper");

    if(playerSelection===computerSelection){
        return 1;
    }
    else{
        if(conditionOne || conditionTwo || conditonThree){
            return 2;
        }
        else return 3;
    }
}

function playGame(){
    let playerScore=0;
    let computerScore=0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === 2) {
            playerScore++;
        } else if (result === 3) {
            computerScore++;
        }
        
        console.log(`You chose ${playerSelection} | Computer chose ${computerSelection}`);
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
        
        
    }
    if(playerScore>computerScore){
        return `You Win!, Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
    else if(computerScore>playerScore){
        return `You Lose!, Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
    else return `It's a Tie!`;
}


console.log(playGame());