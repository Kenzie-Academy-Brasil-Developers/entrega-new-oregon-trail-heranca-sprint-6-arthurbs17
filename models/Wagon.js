class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }
    
    getAvailableSeatCount() {
        let availableSeats = this.capacity - this.passengers.length;
        if (availableSeats > 0) {
            return availableSeats;
        } else {
            return 0
        }
    }
    join(passageiro) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(passageiro);
        }
    }
    shouldQuarantine() {
        let health = false
        this.passengers.forEach(passenger => {
            if(passenger.isHealthy === 'false'){
                health = true
            }
        })
        return health
    }
    totalFood() {
        let foodTotal = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            foodTotal += Number(this.passengers[i].food);
        }
        return foodTotal;
    }
}

module.exports = Wagon;