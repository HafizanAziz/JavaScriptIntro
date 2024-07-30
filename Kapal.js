const Vehicle = require('./vehicle');

class Kapal extends Vehicle {
    constructor(color, age) {
        super('Kapal', color);  // Call the parent constructor with the type 'Kapal'
        this.age = age;         // Additional property specific to Kapal
    }

    get location() {
        return "Canada";
    }
}

module.exports = Kapal;
