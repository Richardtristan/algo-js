const readlineSync = require("readline-sync");
let num1 = readlineSync.question('Can you give me your shoe size?');
let num2 = readlineSync.question('Can you give me your birth year?');
console.log((((num1*5)*50)-num2)+ 1766);