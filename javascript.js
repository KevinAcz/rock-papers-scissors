function getComputerChoice () { 
    //return either rock paper scissors randomly  
    let choice = Math.floor( Math.random() * 3) + 1;
    if (choice === 1) {
        return 'Rock';
    }
    else if (choice === 2) {
        return 'Paper';
    }
    else if (choice === 3) {
        return 'Scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    //Check the capitalization
    let firstLetter = playerSelection[0].toUpperCase();
    playerSelection = playerSelection.toLowerCase();
    let caseCheck = (playerSelection) => firstLetter + playerSelection.slice(1);
    playerSelection = caseCheck(playerSelection);
    //

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return ('You Lose! Paper beats Rock');
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return ('You Win! Paper beats Rock');
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return ('You Lose! Scissors beat Paper');
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        return ('You Win! Rock beat Scissors');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return ('You Lose! Rock beat Scissors'); 
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return ('You Win! Scissors beat Paper');
    }
    else {
        tieScore++;
        return 'It\'s a tie!';
    }
}

//DONE: Hacer que la funcion imprima 5 veces el ganador
//DONE: HAcer que playround indique quien gana en un return
//3 TODO: Hacer que game tenga una cuenta del puntaje y los muestre
function game() {
    let i = 1;
    while (i <= 5) {
        const playerSelection = prompt(`Round ${i}! What will you play`);
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round number ${i}: ${result}`);
        i++;
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log('You win! Congratulations!');
    }
    else if (playerScore < computerScore) {
        console.log('You lost! Try again!');
    }
    else {
        console.log(`Tie! You have tied ${tieScore} times!` );
    }
}
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
game();