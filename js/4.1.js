const readlineSync = require("readline-sync");

function calcSurface(h, l){/* calcule le h x le l*/
	return h* l;
}
console.log(calcSurface(2,3));

let a = Number(readlineSync.question('donnes une longueur'));
let b = Number(readlineSync.question('donnes une largeur'));
console.log(calcSurface(a,b));


