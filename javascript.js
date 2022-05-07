function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "It's a draw!";
        }
        else if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "Paper") {
            return "It's a draw!";
        }
        else if (computerSelection == "Rock") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "Scissors") {
            return "It's a draw!";
        }
        else if (computerSelection == "Paper") {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "You Lose! Rock beats Scissors";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();