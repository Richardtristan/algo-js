const readlineSync = require("readline-sync");

// var chiffre = 0;
var chiffre = 0;

while(chiffre!=42){
	 chiffre = Number(readlineSync.question('un chiffre au hazard?'));
	if (chiffre!=42) {
		console.log("recommence!");
	}

if (chiffre==42){
		console.log("bravo!");
}
}



