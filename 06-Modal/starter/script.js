'use strict';
const ShowButton = document.querySelectorAll(`.show-modal`);
const CloseButton = document.querySelector(`.close-modal`);
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const hidden = document.querySelectorAll(`.hidden`);

overlay.addEventListener(`click`, function () {
  hideHidden();
});

CloseButton.addEventListener(`click`, function () {
  hideHidden();
});

function showHidden() {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.remove(`hidden`);
  }
}

function hideHidden() {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.add(`hidden`);
  }
}

for (let i = 0; i < ShowButton.length; i++) {
  ShowButton[i].addEventListener('click', function () {
    showHidden();
  });
}

document.addEventListener(`keydown`, function (e) {
  if ((e.key == `Escape`) & !modal.classList.contains(`hidden`)) {
    hideHidden();
  }
});
