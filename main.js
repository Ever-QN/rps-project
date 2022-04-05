function computerPlay() {
    const gameChoices = ["Rock", "Paper", "Scissors"];
    let randomResult = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return randomResult;
}

computerPlay();