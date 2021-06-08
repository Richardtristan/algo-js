const readlineSync = require("readline-sync");

let min = Number(readlineSync.question('un chiffre minimum?'));

let max = Number(readlineSync.question('un chiffre maximum plus grand que le minimum?'));

let current = Number(readlineSync.question('et choisis un chiffre au hazard?'));

if (current >= min && current <= max){
	console.log(current);
	else
		console.log(ton chiffre au hazard se situe pas entre le minimum et le maximum);
	}