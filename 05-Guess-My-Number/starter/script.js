'use strict';

let myNumber;
let score = 20;

function generateNumber() {
  myNumber = Math.floor(Math.random() * 20) + 1;
  console.log(myNumber);
}

generateNumber();

document.querySelector(`.check`).addEventListener('click', function () {
  checkNumber();
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  resetGame();
});

function resetGame() {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  generateNumber();
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
  setMessage(`Start guessing...`);
}
function checkNumber() {
  const guess = document.querySelector(`.guess`).value;

  if (!guess | (guess > 20)) {
    setMessage(`Invalid!`);
  } else if (guess == myNumber) {
    setMessage(`Correct!`);
    win();
  } else if (guess < myNumber) {
    setMessage('too Low!');
    decreaseScore();
  } else {
    setMessage('too High!');
    decreaseScore();
  }
}

function decreaseScore() {
  if (score > 1) {
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    setMessage(`you Lost :(`);
  }
}

function setMessage(string) {
  document.querySelector(`.message`).textContent = string;
}

function win() {
  const highscore = document.querySelector(`.highscore`).textContent;
  document.querySelector(`.number`).textContent = myNumber;
  document.querySelector(`body`).style.backgroundColor = '#60b347';
  document.querySelector(`.number`).style.width = `30rem`;
  if (score > highscore) {
    document.querySelector(`.highscore`).textContent = score;
  }
}
