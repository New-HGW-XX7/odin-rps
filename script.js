let i = 0, pC = 0, cC = 0;

const score = document.querySelector('.score');
const winner = document.createElement('p');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

/*rock.addEventListener('click', () => {
    const result = document.createElement('p');

    result.textContent = check(playRound('Rock', computerPlay()));
    score.appendChild(result);

    if(i === 5) {
        winner.textContent = checkWinner();
        score.appendChild(winner);
    }
});*/
rock.addEventListener('click', () => outsourceEvent('Rock'));

paper.addEventListener('click', () => outsourceEvent('Paper'));

scissors.addEventListener('click', () => outsourceEvent('Scissors'));

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

function outsourceEvent(x) {
    const result = document.createElement('p');

    result.textContent = check(playRound(x, computerPlay()));
    score.appendChild(result);

    if(i === 5) {
        winner.textContent = checkWinner();
        score.appendChild(winner);
    }   
}

function check(input) {

     if(i < 5) {
        if(input.includes("Lose")) {cC++};
        if(input.includes("Win")) {pC++}; 

        i++;
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



// Below follows what the exercise actually demands. I misread and only allowed for 5 rounds in total.
// Slight adjustments have to be made for the eventlisteners to implement this solution.
/*
function check2(input) {

    if(input.includes("Lose")) {cC++};
    if(input.includes("Win")) {pC++}; 

    i++;
    return `Round ${i}: ${input}`;
}

function checkWinner2() {

    if(cC === 5) {return "Computer is the Winner!";}
    if(pC === 5) {return "You are the Winner!";}
}
*/



// Old code from the non-GUI version
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