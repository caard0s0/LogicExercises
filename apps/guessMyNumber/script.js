'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
};


const btnCheckNumber = function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('🚫 No number!');
        
    } else if (secretNumber === guess) {
        displayNumber(secretNumber);
        displayMessage('Congratulations 🎉');
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
    } else if (secretNumber !== guess) {
        score--
        if (score > 0) {
            displayMessage(secretNumber > guess ? 'Too Low! 📉' : 'Too High! 📈');
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game 💥');
            document.querySelector('.score').textContent = 0;
        }
    }
};

const btnAgain = function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    displayNumber('?');
    displayMessage('Start guessing...');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', btnCheckNumber);
document.querySelector('.again').addEventListener('click', btnAgain);