function computerPlay() {
    const gameChoices = ["rock", "paper", "scissors"];
    let computerResult = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerResult;
}

function playRound (playerSelection, computerSelection) {

    let roundResult;

    if (playerSelection === "rock" && computerSelection === "paper") {

        roundResult = "You lose. Paper beats rock.";
        return roundResult;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        
        roundResult = "You win! Rock beats scissors";
        return roundResult;

    } else if (playerSelection === "paper" && computerSelection === "rock") {

        roundResult = "You win! Paper beats rock."
        return roundResult;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {

        roundResult = "You lose. Scissors beats paper.";
        return roundResult;

    } else if (playerSelection === "scissors" && computerSelection == "rock") {

        roundResult = "You lose. Rock beats scissors.";
        return roundResult;

    } else if (playerSelection === "scissors" && computerSelection == "paper") {

        roundResult = "You win! Scissors beats paper.";
        return roundResult;

    } else if (playerSelection === computerSelection) {

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

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", function(){
    computerSelection = computerPlay();
    playRound(rock, computerSelection);
});
btnPaper.addEventListener("click", function(){
    computerSelection = computerPlay();
    playRound(paper, computerSelection);
});
btnScissors.addEventListener("click", function(){
    computerSelection = computerPlay();
    playRound(scissors, computerSelection);
});