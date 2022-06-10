let i = 0, pC = 0, cC = 0, rC = 0;

const score = document.querySelector('.score');

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    const result = document.createElement('p');
    const winner = document.createElement('p');

    let tempResult = playRound('Rock', computerPlay());
    result.textContent = check(tempResult);
    score.appendChild(result);

    if(rC === 5) {
        winner.textContent = checkWinner();
        score.appendChild(winner);
    }
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    const result = document.createElement('p');
    result.textContent = playRound('Paper', computerPlay());
    score.appendChild(result);
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    const result = document.createElement('p');
    result.textContent = playRound('Scissors', computerPlay());
    score.appendChild(result);
});

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
    // playerSelection = equalizeInput(playerSelection); No longer needed in GUI-version

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

function check(input) {

        if(i < 5) {
            if(input.includes("Lose")) {cC++};
            if(input.includes("Win")) {pC++}; 

            i++;
            rC++;
            return `Round ${i}: ${input}`;
        }
}

function checkWinner() {
    
    if(cC === pC) {
        return "It's a Tie!";
    } else if(cC > pC) {
        return "Computer is the Winner!";
    } else {
        return "You are the Winner!";
    }
}

/*
function game() {
    let cC = 0; let pC = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay(); // Has to be refreshed inside the function
        const playerSelection = prompt("Rock, Paper, Scissors?");
        let check = playRound(playerSelection, computerSelection);

        if(check.includes("Lose")) {cC++};
        if(check.includes("Win")) {pC++}; 

        console.log(`Round ${i+1}: ` + check);
    }

    if(cC === pC) {
        console.log("It's a Tie!");
    } else if(cC > pC) {
        console.log("Computer is the Winner!");
    } else {
        console.log("You are the Winner!");
    }
}
*/

/*
function equalizeInput(string) {
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}
*/