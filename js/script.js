'use strict';

var gScore = 20;
var gEndGame = false;
var highScore = 0;

function init() {

    getRandomNum();
}

function checkHighScore() {
    document.querySelector('.highscore');
    document.querySelector('.score');
    if (gScore > highScore) {
        highScore = gScore;
    } else if (gScore < highScore) {
        return;
    }
    document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
    return;
}

function getRandomNum() {
    var randomNum = document.querySelector('.number');

    randomNum.innerText = getRndInteger(1, 20);
    console.log(randomNum.innerText);
}

function checkAnswer() {
    var randomNum = document.querySelector('.number').textContent;

    var guess = Number(document.querySelector('.guess').value);
    var msg = document.querySelector('.message');
    var box = document.querySelector('.box');
    console.log(gScore);
    if (gScore === 0) {
        var msg = document.querySelector('.message');
        msg.innerText = 'You Lose!';
        msg.style.color = 'crimson';
        document.querySelector('.score').textContent = 0;
        if (guess > randomNum || guess < randomNum || guess === 0) {
            return;
        }
        return;
    }

    if (!guess) {
        msg.innerText = '❌Not a Number!❌';
        msg.style.color = 'red';
        return;
    }
    if (!gEndGame) {
        checkLowHigh();
    }
    if (guess === Number(randomNum)) {
        msg.innerText = 'CORRECT!✔';
        msg.style.color = 'darkgreen';
        box.style.display = 'none';
        checkHighScore();
        gEndGame = true;
        return gEndGame = true;
    }
}

function checkLowHigh() {
    var randomNum = document.querySelector('.number').textContent;
    var guess = Number(document.querySelector('.guess').value);
    var msg = document.querySelector('.message');
    var randomListMinus = [randomNum - 1, randomNum - 2, randomNum - 3];
    var randomListPlus = [+randomNum + 1, +randomNum + 2, +randomNum + 3];

    if (guess > randomNum) {
        msg.innerText = 'Lower';
        msg.style.color = 'white';
        document.querySelector('.score').textContent = gScore;
    } if (guess === randomListPlus[0] || guess === randomListPlus[1] || guess === randomListPlus[2]) {

        msg.innerText = 'Close, but lower';
        msg.style.color = 'white';
    }
    if (guess < randomNum) {
        msg.innerText = 'Higher';
        msg.style.color = 'white';
        document.querySelector('.score').textContent = gScore;
    } if (guess === randomListMinus[0] || guess === randomListMinus[1] || guess === randomListMinus[2]) {

        msg.innerText = 'Close, but higher';
        msg.style.color = 'white';
    }
    gScore--;
    return;
}

function restartGame() {
    var msg = document.querySelector('.message');
    var body = document.querySelector('body');
    var box = document.querySelector('.box');
    msg.innerText = 'Start guessing...';
    msg.style.color = 'white';
    msg.style.outline = 'none';
    body.style.backgroundColor = '#222';
    gScore = 20;
    document.querySelector('.score').textContent = gScore;
    gEndGame = false;
    box.style.display = 'block';
    init();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


