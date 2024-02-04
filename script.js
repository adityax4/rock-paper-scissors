let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreDisplay = document.querySelector("#score");
const resultDisplay = document.querySelector("#result");
const showWinner = document.querySelector("p");
const playAgainButton = document.querySelector("#playAgain");

const showChoice = document.createElement("p");


rock.addEventListener('click', ()=>displayResult(playRound("rock")));
paper.addEventListener('click', ()=>displayResult(playRound("paper")));
scissors.addEventListener('click', ()=>displayResult(playRound("scissors")));

function displayResult(result){
    showWinner.textContent="";
    scoreDisplay.textContent=`Your Score: ${playerScore} | Computer Score: ${computerScore}`;
    resultDisplay.textContent=result;
    scoreDisplay.appendChild(showChoice);
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (playerScore === 5) {
        showWinner.textContent="YOU WIN!";
    } else {
        showWinner.textContent="COMPUTER WINS!";
    }

    
    playAgainButton.style.display = "block";

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

playAgainButton.addEventListener('click', () => {
    // Reset scores and clear displays
    playerScore = 0;
    computerScore = 0;
    showWinner.textContent = "";
    scoreDisplay.textContent = "Your Score: 0 | Computer Score: 0";
    resultDisplay.textContent = "";
    showChoice.textContent = "";

    // Hide the Play Again button again
    playAgainButton.style.display = "none";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
});

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
