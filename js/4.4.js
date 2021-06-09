    const readlineSync = require("readline-sync");

    function rand10() {
	return Math.ceil(Math.random() * 10);

}

    let arr =[];
    let i =0;

	function multiRand(n){/* ca injet n fois rand10 dans un tableau */
		n = Number(readlineSync.question('un nombre'));
		while (i<n){
         arr.push(rand10())
         i++
		}
		return arr;
	}


	function average(){
	let stock = 0;
    let sum = 0;
    for(let i =0; i < arr.length; i++){
	sum += arr[i];
    }
	stock = sum/arr.length;
        return stock;

	}

	function min(){
    return Math.min(...arr);
	}

		function max(){
    return Math.max(...arr);
	}
    console.log(multiRand(), average(), min(), max());