const readlineSync = require("readline-sync");
let num1 = readlineSync.question('Can you give me 1 numbre with decimal part?');
let num2 = readlineSync.question('Can you give an another numbre with decimal part?');
console.log(Math.trunc(num1) * num2 );