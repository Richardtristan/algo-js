const readlineSync = require("readline-sync");


function askTvSerie() {
let objet = {

    "Name" : readlineSync.question("Name of favorite series? : "),
    // ... or just specify it this way if we want
    "Productionyear" : readlineSync.question("Production year of this? : "),
    // we can use any type for the value
    "Namesofthecastmembers" : []   
  }
  //readlineSync.question("Names of the cast members as much as you want :  ")

  let n = readlineSync.question("how much actor :  ")
  while(n > 0){
   let p = readlineSync.question("Names of the cast members as much as you want :  ")
    n--
    objet["Namesofthecastmembers"].push(p)
  }



return objet;
}
  console.log(askTvSerie());