class Traveler {
    constructor(name, isHealthy = 'true', food = '1') {
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }
   
    hunt() {
        this.food += 2;
    }
    eat() {
        if (this.food < 1) {
            this.isHealthy = false;
        }
        if (this.food > 0) {
            this.isHealthy = true;
            this.food -= 1;
        }
    }
}

module.exports = Traveler;