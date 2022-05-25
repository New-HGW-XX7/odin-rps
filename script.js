function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3); // RN between 0 and 2
    switch(randomNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // Equalize input - could be its own function to be called here
    playerSelection = playerSelecion1.toLowerCase().charAt(0).toUpperCase() + playerSelecion1.slice(1);

    if(playerSelection === computerSelection) {
        return "Tie";
    } else if((playerSelection === "Rock") && computerSelection === "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if((playerSelection === "Paper") && computerSelection === "Scissors") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if((playerSelection === "Scissors") && computerSelection === "Rock") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else return `You Win! ${playerSelection} beats ${computerSelection}`;
}

/*
function equalizeInput(string) {
    
}
*/
const playerSelection = "rock";
const computerSelection = computerPlay();