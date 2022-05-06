function computerPlay() {
    const gameChoices = ["rock", "paper", "scissors"];
    let computerResult = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerResult;
}

function playRound (playerSelection, computerSelection) {

    let roundResult;

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {

        roundResult = "You lose. Paper beats rock.";
        return roundResult;

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        
        roundResult = "You win! Rock beats scissors";
        return roundResult;

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {

        roundResult = "You win! Paper beats rock."
        return roundResult;

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {

        roundResult = "You lose. Scissors beats paper.";
        return roundResult;

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "rock") {

        roundResult = "You lose. Rock beats scissors.";
        return roundResult;

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection == "paper") {

        roundResult = "You win! Scissors beats paper.";
        return roundResult;

    } else if (playerSelection.toLowerCase() === computerSelection) {

        roundResult = "Tied! Both of you chose " + playerSelection + ".";
        return roundResult;

    } else {

        roundResult = "Error! Something went wrong. Perhaps an invalid input?";
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

let btnRock = document.createElement("button");
btnRock.textContent = "Rock";

let btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";

let btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";

document.body.append(btnRock, btnPaper, btnScissors);

const btnChoice = document.querySelectorAll(".btnRock, .btnPaper, .btnScissors");

