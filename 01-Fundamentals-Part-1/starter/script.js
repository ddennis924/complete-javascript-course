// let country = "Canada";
// let continent = "North America";
// let population = 38.01;

// console.log(country);
// console.log(continent);
// console.log(population);

// population -= 3;
// console.log(population);

// let x, y;
// x = y = 20 - 3;

// const object = {
//     function(x, y) {
//         return Math.round(x / y ** 2);
//     }
// }

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = object.function(markWeight, markHeight);
// const johnBMI = object.function(johnWeight, johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// // console.log(markBMI, johnBMI)
// // console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
// }

// console.log(Number(`a`) + 1 + 4 - 2)
// console.log("a" - "b")

// const math = {
//     mean(x) {
//         let i;
//         for (const n of x) {
//             i += n;
//         }
//         return i / x.length;
//     }
// }

// const dolph = [96, 108, 89];
// const koalas = [88, 91, 110];

// if (math.mean(dolph) > math.mean(koalas)) {
//     console.log(`Dolphins win!`);
// } else if (math.mean(dolph) === math.mean(koalas)) {
//     console.log(`Its a tie!`)
// } else {
//     console.log(`Koaloas win :(`)
// }

// const x = "z";
// x == "a" ? console.log("poo") : x == "b" ? console.log("pee") : console.log("q")


const bill = {
    Bill(price) {
        this.price = price;
    },
    tip: price >= 50 && price <= 300 ? price * 0.15 : price * 0.2
}

const billA = bill.Bill(275);

