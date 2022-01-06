'use strict';

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`What is your favourite programming langauge?
          0: JavaScript
          1: Python
          2: Rust
          3: C++
          (Write option number)`)
    );
    console.log(answer);
    (typeof answer == 'number') &
      (answer < this.answers.length) &
      this.answers[answer]++;
    this.displayResults(`string`);
  },
  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`, `)}.`);
    }
  },
};
const pollBtn = document.querySelector(`.poll`);

pollBtn.addEventListener(`click`, poll.registerNewAnswer.bind(poll));
// {
//   let f;
//   const g = function () {
//     const a = 23;
//     f = function () {
//       console.log(a * 2);
//     };
//   };
//   const b = function () {
//     const b = 31;
//     f = function () {
//       console.log(b / 2);
//     };
//   };
//   g();
//   f();
//   b();
//   f();
// }

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
