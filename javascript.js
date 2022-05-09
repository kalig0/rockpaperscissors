function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

let playerScore = 0;
let computerScore = 0;

function playRockRound(computerSelection) {
    if (computerSelection == "Rock") {
        return "It's a draw!";
    }
    else if (computerSelection == "Paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    else {
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
}

function playPaperRound(computerSelection) {
    if (computerSelection == "Paper") {
        return "It's a draw!";
    }
    else if (computerSelection == "Rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    else {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
}

function playScissorsRound(computerSelection) {
    if (computerSelection == "Scissors") {
        return "It's a draw!";
    }
    else if (computerSelection == "Paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
    else {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
}

// const button1 = document.querySelector("#rock");
// button1.addEventListener("click", () => {
//     alert("rock");
//     //var result = playRockRound(computerSelection);
// });
// //document.getElementById("results").innerHTML = result;


// const button2 = document.querySelector("#paper");
// button2.addEventListener("click", () => {
//     alert("paper");
//     //var result = playPaperRound(computerSelection);
// });
// //document.getElementById("results").innerHTML = result;


// const button3 = document.querySelector("#scissors");
// button3.addEventListener("click", () => {
//     alert("scissors");
//     //var result = playScissorsRound(computerSelection);
// });
// //document.getElementById("results").innerHTML = result;

