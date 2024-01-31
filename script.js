function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        return 1;
    }
    else{
        if(playerSelection=="paper"&&computerSelection=="Rock" || playerSelection=="rock" && computerSelection=="Scissors" || playerSelection=="scissors" && computerSelection=="Paper"){
            return 2;
        }
        return 3;
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
        
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)
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