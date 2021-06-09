const readlineSync = require("readline-sync");

let r = Number(readlineSync.question('combien de chiffre veux tu'));

var a =[];
var total = 0;

for(var i =0; i< r;i++)
{
	a.push(readlineSync.question('donnes un chiffre'));
}
for(var i =0; i < a.length; i++){
	total +=Number(a[i]);
}
console.log(total);

// var n = 1;
// var a = r + 1;
// var b = 0;

// while(a > n){
// 	let r = Number(readlineSync.question('donne un chiffre'));

//  b = r + b;

//  n++;
// }
// console.log(b);


