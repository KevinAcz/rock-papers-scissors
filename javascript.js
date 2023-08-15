//TODO: En la iteracion final, que muestre que se gano modificando los divs
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

function game(playerSelection) {

        console.log(playerSelection);
        roundCounter++;

        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        roundNumber.textContent = `ROUND ${roundCounter} `;
        log.textContent = `${result}`;

        humanScore.textContent = `${playerScore}`;
        machineScore.textContent = `${computerScore}`;

        let currentRoundDiv = document.querySelector(`#result-${roundCounter}`);
        if (result.includes('Win')) {
           currentRoundDiv.classList.add('win');
           currentRoundDiv.textContent = 'WIN!';
        }
        else if (result.includes('Lose')) {
            currentRoundDiv.classList.add('lose');
            currentRoundDiv.textContent = 'LOSE!';
        }
        else {
            currentRoundDiv.classList.add('tie');
            currentRoundDiv.textContent = 'TIE!';
        }
        if (roundCounter === 5) {

            //Check who won
            if (playerScore > computerScore) {
                log.textContent = 'You won! Congratulations!';
            }
            else if (playerScore < computerScore) {
                log.textContent = 'You lose! Better luck next time!';
            }
            else {
                log.textContent = `Tie! You hav tied ${tieScore} times!`;
            }             
            //Deletear rock paper scissors button and add new to restart game
            

            //Reiniciar el juego
            roundCounter = 0;
            playerScore = 0;
            computerScore = 0;
            tieScore = 0;

            // Reiniciar los elementos result
    //         for (let i = 1; i <= 5; i++) {
    //             let currentRoundDiv = document.querySelector(`#result-${i}`);
    //             currentRoundDiv.classList.remove('win', 'lose', 'tie');
    //             currentRoundDiv.textContent = '';
    // }
        } 
    }

let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

const log = document.querySelector('#log');
const roundNumber = document.querySelector('#round-number');
const roundMarker = document.querySelector('#round-counter');
const rock = document.querySelector('#rock');
const papers = document.querySelector('#papers');
const scissors = document.querySelector ('#scissors');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let roundCounter = 0;

rock.addEventListener('click', function () {
    game('Rock');
  });
papers.addEventListener('click', function () {
    game('Paper');
  });
  scissors.addEventListener('click', function () {
    game('Scissors');
  });



