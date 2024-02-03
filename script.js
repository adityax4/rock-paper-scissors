let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const divOne = document.querySelector("#score");
const divTwo = document.querySelector("#result");

const showChoice = document.createElement("p");

rock.addEventListener('click', ()=>displayResult(playRound("rock")));
paper.addEventListener('click', ()=>displayResult(playRound("paper")));
scissors.addEventListener('click', ()=>displayResult(playRound("scissors")));

function displayResult(result){
    divOne.textContent=`Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    divTwo.textContent=result;
    divOne.appendChild(showChoice);
}




function getComputerChoice(){ // random choice generate 
    let choices = ["rock", "paper", "scissors"]; 
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection){
    let computerSelection=getComputerChoice();

    let conditionOne = (playerSelection==="paper"&&computerSelection==="rock");
    let conditionTwo = (playerSelection==="rock"&&computerSelection==="scissors");
    let conditonThree =(playerSelection==="scissors"&&computerSelection==="paper");

    if(playerSelection===computerSelection){
        return "It's a Tie!";
    }
    else{
        if(conditionOne || conditionTwo || conditonThree){
            playerScore++;
            return `${playerSelection} beats ${computerSelection}`;
        }
        else{
            computerScore++;
            return `${computerSelection} beats ${playerSelection}`;
        }
    }
}

function playGame(){
    // or for loop (i from 1 to 5) 5 rounds
    // while rounds and (first to score 5 points wins)
    while(computerScore!==5 && playerScore!==5) {
        // user input
        let playerSelection;
        let computerSelection = getComputerChoice();
        // result stores (who wins)
        let result = playRound(playerSelection, computerSelection);

        if (result === 2) {
            
        } else if (result === 3) {
            
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