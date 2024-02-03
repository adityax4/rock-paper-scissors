let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const divOne = document.querySelector("#score");
const divTwo = document.querySelector("#result");

const showChoice = document.createElement("p");
const showWinner = document.createElement("p");

rock.addEventListener('click', ()=>displayResult(playRound("rock")));
paper.addEventListener('click', ()=>displayResult(playRound("paper")));
scissors.addEventListener('click', ()=>displayResult(playRound("scissors")));

function displayResult(result){
    divOne.textContent=`Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    divTwo.textContent=result;
    divOne.appendChild(showChoice);
    divTwo.appendChild(showWinner);
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (playerScore === 5) {
        showWinner.textContent="YOU WIN!";
    } else {
        showWinner.textContent="COMPUTER WIN!";
    }

    // Reset scores for a new game
    playerScore = 0;
    computerScore = 0;
}


function getComputerChoice(){ // random choice generate 
    let choices = ["rock", "paper", "scissors"]; 
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection){
    let computerSelection=getComputerChoice();
    showChoice.textContent=`You chose ${playerSelection} | Computer chose ${computerSelection}`;

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