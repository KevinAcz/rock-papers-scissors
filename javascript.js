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
function checkPlayerSelection (playerSelection) {
    //check if playerSelection is ESC or OK button
    if (playerSelection === null) {
        return null;
    }
    if (playerSelection === "") {
        return false;
    }
    //Check the capitalization
    let firstLetter = playerSelection[0].toUpperCase();
    playerSelection = playerSelection.toLowerCase();
    let caseCheck = (playerSelection) => firstLetter + playerSelection.slice(1);
    playerSelection = caseCheck(playerSelection);
    //
    if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
        return false;
    }
    else {
        return playerSelection;
    }
}

function playRound (playerSelection, computerSelection) {

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
        return ('You Lose! Scissors beats Paper');
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        return ('You Win! Rock beats Scissors');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return ('You Lose! Rock beats Scissors'); 
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

function game() {
    let i = 1;
    while (i <= 5) {
        let playerSelection = prompt(`Round ${i}! What will you play?`);
        playerSelection = checkPlayerSelection(playerSelection);

        while (playerSelection === false || playerSelection === null) {
            if (playerSelection === null) {
                console.log('Game aborted.');
                return;
            }
            playerSelection = prompt("That\'s not a valid value! Try again.");
            playerSelection = checkPlayerSelection(playerSelection);
        }
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