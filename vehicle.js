class Vehicle {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    start() {
        return `${this.type} is good.`;
    }
}

module.exports = Vehicle;
