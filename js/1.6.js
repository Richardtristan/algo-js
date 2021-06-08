const readlineSync = require("readline-sync");
let num1 = readlineSync.question('Can you give me 1 integers ?');
let num2 = readlineSync.question('Can you give an another integers ?');
console.log(Math.trunc(num1) * num2 );