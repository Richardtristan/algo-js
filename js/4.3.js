const readlineSync = require("readline-sync");
function rand10() {
	return Math.ceil(Math.random() * 10);

}

let arr =[];
let i =0;
	function multiRand(n){
		n = Number(readlineSync.question('un nombre'));
		while (i<n){
         arr.push(rand10())
         i++
		}
		return arr;
	}
console.log(multiRand());