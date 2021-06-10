function calcDistance (x1,y1,x2,y2){/* calcule la distance entre 2 positions */

let x = x1 - x2;
let y = y1 - y2;


return Math.sqrt((x * x) +(y * y));
}

console.log(calcDistance(1, 1, 2, 2));
console.log(calcDistance(1, 1, 3, 1));
console.log(calcDistance(4, 1, 1, 1));
console.log(calcDistance(-2, 2, 2, -2));