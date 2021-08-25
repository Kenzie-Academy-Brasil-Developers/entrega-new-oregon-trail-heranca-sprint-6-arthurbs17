const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name){
        super(name, 2, true)
    }

    hunt(){
        this.food += 5
    }

    eat(){
        if (this.food < 2) {
            this.isHealthy = false;
        }
        if (this.food > 1) {
            this.isHealthy = true;
            this.food -= 2;
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if(numOfFoodUnits < this.food){
            traveler.food += numOfFoodUnits;
            this.food -= numOfFoodUnits;
        }
        return this.food
    }
}

module.exports = Hunter;