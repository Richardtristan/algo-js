var a = [1, 2, 3, 4, 5];
var b = [100, 101, 102];
let sum =0;
let total =0;
for(let i =0; i < a.length; i++){
	sum += a[i];
}
for(let i =0; i < b.length; i++){
	total += b[i];
}
console.log(sum / 5);
console.log(total / 3);
