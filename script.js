function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        return `It's a Tie! ${playerSelection} and ${computerSelection}`
    }
    else{
        if(playerSelection=="paper"&&computerSelection=="Rock" || playerSelection=="rock" && computerSelection=="Scissors" || playerSelection=="scissors" && computerSelection=="Paper"){
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));