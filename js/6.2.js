class Rectangle  {
    constructor(topLeftXPos, topLeftYPos, width, length ) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos  = topLeftYPos;
        this.width = width;
        this.length = length;
      }

      collides()
        {
            if(rect1.topLeftXPos < rect.topLeftXPos + rect.width &&
                rect1.topLeftXPos + rect1.width > rect.topLeftXPos &&
                rect1.topLeftYPos < rect.topLeftYPos + rect.length &&
                rect1.length + rect1.topLeftYPos > rect.topLeftYPos)
                {
                    return "collision"
                }
                else{
                    return " aucune collision"
        }
                }
}

const rect = new Rectangle(1, 1, 5, 5);
const rect1 = new Rectangle(10, 10, 2, 2);
console.log(rect.collides(rect1));