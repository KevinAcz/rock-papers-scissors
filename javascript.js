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
console.log(getComputerChoice() );
function round (playerSelection, computerSelection) {

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return ('You Lose! Paper beats Rock');
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ('You Win! Paper beats Rock');
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return ('You Lose! Scissors beat Paper');
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ('You You Win! Rock beat Scissors');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return ('You Lose! Rock beat Scissors') 
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return('You Win! Scissors beat Paper');
    }
}
console.log( round ('Rock','Paper'));