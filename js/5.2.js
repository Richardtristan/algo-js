const readlineSync = require("readline-sync");


function askTvSerie() {
    let objet = {
        "Name" : readlineSync.question("Name of favorite series? : "),
        // ... or just specify it this way if we want
        "Productionyear" : readlineSync.question("Production year of this? : "),
        // we can use any type for the value
        "Namesofthecastmembers" : []   
    }


    let n = readlineSync.question("how much :  ")
    while(n > 0){
        let p = readlineSync.question("Names of the cast members as much as you want :  ")
        n--
        objet["Namesofthecastmembers"].push(p)
    }
    return objet;
}
//console.log(askTvSerie());

  let objet1 = {
//serie : JSON.stringify(askTvSerie())
  }
//console.log(objet1);



function randomizeCast(askTvSerie){ 
    return  askTvSerie["Namesofthecastmembers"].sort(() => Math.random()-0.5);
}
console.log(randomizeCast(askTvSerie()));