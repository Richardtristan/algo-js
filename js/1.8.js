const readlineSync = require("readline-sync");

let num1 = readlineSync.question('un annimal?');
console.log("il te reste 3 questions");
let num2 = readlineSync.question('un pays?');
console.log("il te reste 2 questions");
let num3 = readlineSync.question('un jouet?');
console.log("il te reste 1 question");
let num4 = readlineSync.question('fin tragique?');
console.log("tu n'as plus de question voici le resultat");
console.log("il était une fois un" + " " +num1 + " " + "qui vivait en" + " " + num2 + " " +" qui aimait son" + " " +num3 + " " + "mais soudain!" + " "  + num4 );
