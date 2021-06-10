const readlineSync = require("readline-sync");
let tab1 = [1, 2, 3, 4, 5];
let tab2 = [...tab1];

console.log(tab2);

var num = 0;
var arr = [];
var y=Number(readlineSync.question("please put in a number"));

function inj(){
    //let num = 0;
    while(num<y){
       n = readlineSync.question("How many numbers should we ask you for?");
        arr.push(n)
        num++ 
    }
    return arr;
}
console.log(Math.min(...inj()));
console.log(Math.max(...inj()));
