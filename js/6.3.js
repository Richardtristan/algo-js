const readlineSync = require("readline-sync");

let i = 0;
while (i < 1000) {
    class Rectangle {
        constructor(topLeftXPos, topLeftYPos, width, length) {
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.length = length;
        }
        collides() {
            if (rectB.topLeftXPos < rectA.topLeftXPos + rectA.width && rectB.topLeftXPos + rectB.width > rectA.topLeftXPos &&
                rectB.topLeftYPos < rectA.topLeftYPos + rectA.length && rectB.length + rectB.topLeftYPos > rectA.topLeftYPos) {
                return "collision";
            }
        }
    }

    let chiffre = Math.floor(Math.random() * 100);
    let chiffre2 = Math.floor(Math.random() * 100);
    let chiffre3 = Math.floor(Math.random() * 100);
    let chiffre4 = Math.floor(Math.random() * 100);
    let chiffre5 = Math.floor(Math.random() * 100);
    let chiffre6 = Math.floor(Math.random() * 100);
    let chiffre7 = Math.floor(Math.random() * 100);
    let chiffre8 = Math.floor(Math.random() * 100);
    const rectA = new Rectangle(chiffre, chiffre2, chiffre3, chiffre4);
    const rectB = new Rectangle(chiffre5, chiffre6, chiffre7, chiffre8);


    if (rectB.topLeftXPos < rectA.topLeftXPos + rectA.width && rectB.topLeftXPos + rectB.width > rectA.topLeftXPos &&
        rectB.topLeftYPos < rectA.topLeftYPos + rectA.length && rectB.length + rectB.topLeftYPos > rectA.topLeftYPos) {
        console.log(rectA);
        console.log(rectB);  
        console.log(rectA.collides(rectB));
    }
    i++;   
}