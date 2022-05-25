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
    playerSelection = equalizeInput(playerSelection);

    if(playerSelection === computerSelection) {
        return "Tie";

    } else if((playerSelection === "Rock") && (computerSelection === "Paper")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    let cC = 0; let pC = 0; let tC = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay(); // Has to be refreshed inside the function
        const playerSelection = prompt("Rock, Paper, Scissors?");
        let check = playRound(playerSelection, computerSelection);

        (check.includes("Lose")) ? cC++ : (check.includes("Win")) ? pC++ : tC++;

        console.log(`Round ${i+1}: ` + check);
    }
    if(tC === 5) {
        console.log("It's a Tie!");
    } else if(cC > pC) {
        console.log("Computer is the Winner!");
    } else {
        console.log("You are the Winner!");
    }
}


function equalizeInput(string) {
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();