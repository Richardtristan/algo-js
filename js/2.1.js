const readlineSync = require("readline-sync");
let age1 = 18;
let age = readlineSync.question('ton age?');
if (age < age1) {
	console.log("tu es mineur");
}

	else{
	console.log("tu es majeur");

}