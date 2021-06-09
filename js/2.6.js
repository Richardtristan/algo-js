const readlineSync = require("readline-sync");


let chiffre = Number(readlineSync.question('un chiffre entre 1 et 7?'));

if (chiffre === 1) {
	console.log("lundi");
}
if (chiffre === 2) {
	console.log("mardi");
}
if (chiffre === 3) {
	console.log("mercredi");
}
if (chiffre === 4) {
	console.log("jeudi");
}
if (chiffre === 5) {
	console.log("vendredi");
}
if (chiffre === 6) {
	console.log("samedi");
}
if (chiffre === 7) {
	console.log("dimanche");
}
if (chiffre < 1) {
	console.log("ce n'est pas la question!");
	let chiffre = Number(readlineSync.question('un chiffre entre 1 et 7?'));
}
if (chiffre > 7) {
	console.log("ce n'est pas la question!");
	let chiffre = Number(readlineSync.question('un chiffre entre 1 et 7?'));
}
	