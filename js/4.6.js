const readlineSync = require("readline-sync");
function factorial(){/* multiplie x fois num fois le nombre qui diminue de 1 */
    var num = 1;
    var x = Number(readlineSync.question('un nombre : '));
    while (x > 1){
 num = (num * x);
 x--
}
return num;
}
console.log(factorial());