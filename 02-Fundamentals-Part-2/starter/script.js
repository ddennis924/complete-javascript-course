'use strict';

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const dolph = new ArrayList <> ();
// const dolphAvg = calcAverage(85, 54, 41);
// const koalaAvg = calcAverage(23, 34, 27);

// console.log(dolphAvg, koalaAvg);

// function checkWinner(score1, score2) {
//     if (score1 > score2 * 2) {
//         console.log(`The winner is Dolphins (${score1} vs. ${score2})`)
//     } else if (score2 > score1 * 2) {
//         console.log(`The winner is Koalas (${score1} vs. ${score2})`)
//     } else {
//         console.log(`Its a tie (${score1} vs. ${score2})`)
//     }
// }

// checkWinner(dolphAvg, koalaAvg);

// const jons = {
//     friends: ['Michael', 'John', 'Jim'],
//     setBestFriend(friend) {
//         this.bestFriend = friend;
//     }
// }

// const list = [1, 2, 3, 4, 5];
// console.log(list.splice(2, 2))
// console.log(list.toString())

function Person(FullName, mass, height) {
    this.firstName = FullName.split(" ")[0];
    this.LastName = FullName.split(" ")[1];
    this.mass = mass;
    this.height = height;
    this.calcBMI = function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    };
}

const john = new Person("John Smith", 92, 1.95);
const mark = new Person("Mark Miller", 78, 1.69);
console.log(john.calcBMI());
console.log(mark.calcBMI())
function higherBMI(a, b) {
    function printBMI(a, b) {
        console.log(`${a.firstName}'s BMI (${a.bmi}) is higer than ${b.firstName}'s (${b.bmi})`)
    }
    if (a.bmi > b.bmi) {
        printBMI(a, b);
    } else if (b.bmi > a.bmi) {
        printBMI(b, a);
    } else {
        console.log(`both BMI's are equal (${a.bmi})`)
    }
}

higherBMI(john, mark);