'use strict';

const diceImg = document.querySelector(`.dice`);
const rollBtn = document.querySelector(`.btn--roll`);
const holdBtn = document.querySelector(`.btn--hold`);
const newBtn = document.querySelector(`.btn--new`);

function Player(score, player) {
  this.score = score;
  this.player = document.querySelector(player);
}

let player0 = new Player(document.querySelector(`#score--0`), `.player--0`);
player0.currentScore = document.querySelector(`#current--0`);
let player1 = new Player(document.querySelector(`#score--1`), `.player--1`);
player1.currentScore = document.querySelector(`#current--1`);

let currentPlayer = player0;

function changePlayer() {
  currentPlayer.currentScore.textContent = 0;
  if (player0.player.classList.contains(`player--active`)) {
    player0.player.classList.remove(`player--active`);
    player1.player.classList.add(`player--active`);
    currentPlayer = player1;
  } else {
    player0.player.classList.add(`player--active`);
    player1.player.classList.remove(`player--active`);
    currentPlayer = player0;
  }
}

document.addEventListener(`keydown`, function (e) {
  if (e.key === `e`) {
    rollDice();
    console.log(currentPlayer.currentScore);
  }
});

rollBtn.addEventListener(`click`, function () {
  rollDice();
});

holdBtn.addEventListener(`click`, function () {
  hold();
});

function hold() {
  currentPlayer.score.textContent =
    Number(currentPlayer.currentScore.textContent) +
    Number(currentPlayer.score.textContent);
  if (currentPlayer.score.textContent >= 100) {
    document.querySelector(`.overlay`).classList.remove(`.hidden`);
    document.querySelector(`.overlay`).textContent = `${currentPlayer}`;
  }
  changePlayer();
}

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  displayDice(dice);
  if (dice != 1) {
    currentPlayer.currentScore.textContent =
      Number(currentPlayer.currentScore.textContent) + dice;
  } else {
    changePlayer();
  }
}

function displayDice(dice) {
  diceImg.src = `dice-${dice}.png`;
}
