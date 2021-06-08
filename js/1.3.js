const readlineSync = require("readline-sync");
let firstname = readlineSync.question('Can you give me your firstname please?');
console.log("Hello " + firstname);