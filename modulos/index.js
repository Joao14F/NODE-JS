const calculator = require("./calculator");

console.log("2 + 3 =", calculator.add(2, 3));
console.log("7 - 5 =", calculator.subtract(7, 5));
console.log("4 * 6 =", calculator.multiply(4, 6));
console.log("9 / 3 =", calculator.divide(9, 3));
console.log("8 / 0 =", calculator.divide(8, 0));