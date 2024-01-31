function getComputerChoice(){ // random choice generate 
    let choices = ["Rock", "Paper", "Scissors"]; 
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){ 
    // play one round
    // convert to lower case because case insensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // logic conditions for rockPaperScissors game
    let conditionOne = (playerSelection==="paper"&&computerSelection==="rock");
    let conditionTwo = (playerSelection==="rock"&&computerSelection==="scissors");
    let conditonThree =(playerSelection==="scissors"&&computerSelection==="paper");

    if(playerSelection===computerSelection){
        return 1; // tie
    }
    else{
        if(conditionOne || conditionTwo || conditonThree){
            return 2; // player wins!
        }
        else return 3; // computer wins!
    }
}

function playGame(){
    // maintain score
    let playerScore=0;
    let computerScore=0;
    // or for loop (i from 1 to 5) 5 rounds
    // while rounds and (first to score 5 points wins)
    while(computerScore!==5 && playerScore!==5) {
        // user input
        let playerSelection = prompt("Rock or Paper or Scissors: ");
        let computerSelection = getComputerChoice();
        // result stores (who wins)
        let result = playRound(playerSelection, computerSelection);

        if (result === 2) {
            playerScore++;
        } else if (result === 3) {
            computerScore++;
        }
        // displays choices and scores
        console.log(`You chose ${playerSelection} | Computer chose ${computerSelection}`);
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
        
        
    }
    // shows the final winner
    if(playerScore>computerScore){
        return `You Win!, Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
    else if(computerScore>playerScore){
        return `Computer Win!, Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    }
    else return `It's a Tie!`;
}

// Game Starts
console.log(playGame());