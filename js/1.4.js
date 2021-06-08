const readlineSync = require("readline-sync");
let name = readlineSync.question('Can you give me your name please?');
let firstname = readlineSync.question('Can you give me your firstname please?');
let city = readlineSync.question('Can you give me your city please?');
console.log("Hello " + " " + name + " " + firstname + " " + "de" + " " + city);