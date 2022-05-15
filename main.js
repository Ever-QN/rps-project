function computerPlay() {
    const gameChoices = ["rock", "paper", "scissors"];
    let computerResult = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerResult;
}

let playerScore = 0;
let computerScore = 0;

function computerWinsGame() {
    if (computerScore == 5 && computerScore > playerScore) {
        btnRock.style.display = "none";
        btnPaper.style.display = "none";
        btnScissors.style.display = "none";
    }
}

function playerWinsGame() {
    if (playerScore == 5 && playerScore > computerScore) {
        btnRock.style.display = "none";
        btnPaper.style.display = "none";
        btnScissors.style.display = "none";
    }

}
function playerWinsRound() {
    playerScore++;
    playerWinsGame();
    let playerCounter = document.querySelector("#playerCounter");
    playerCounter.textContent = `Player = ${playerScore}`;
}

function computerWinsRound() {
    computerScore++;
    computerWinsGame();
    let computerCounter = document.querySelector("#computerCounter");
     computerCounter.textContent = `Computer = ${computerScore}`;
}

function playRound (playerSelection) {

    let computerSelection = computerPlay();
    let roundResult;

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerWinsRound();
        roundResult = "You lose. Paper beats rock.";
        return roundResult;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWinsRound();
        roundResult = "You win! Rock beats scissors";
        return roundResult;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWinsRound();
        roundResult = "You win! Paper beats rock.";
        return roundResult;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWinsRound();
        roundResult = "You lose. Scissors beats paper.";
        return roundResult;

    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        computerWinsRound();
        roundResult = "You lose. Rock beats scissors.";
        return roundResult;

    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        playerWinsRound();
        roundResult = "You win! Scissors beats paper.";
        return roundResult;

    } else if (playerSelection === computerSelection) {

        roundResult = "Tied! Both of you chose " + playerSelection + ". ";
        return roundResult;

    } else {

        roundResult = "Error! Something went wrong";
        return roundResult;

    }

} 

// function game() {

//     for (let i = 0; i < 5; i++) {

//         playerSelection = window.prompt("Enter rock, paper or scissors");
//         computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }

//     return "Thanks for playing!";
// }

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");
let divRoundResults = document.querySelector("#roundResult");

btnRock.addEventListener("click", function() {
    divRoundResults.textContent = playRound("rock");
});
btnPaper.addEventListener("click", function() {
    divRoundResults.textContent = playRound("paper");
});
btnScissors.addEventListener("click", function() {
    divRoundResults.textContent = playRound("scissors");
});

