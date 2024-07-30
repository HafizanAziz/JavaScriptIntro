// Define the Kapal class
class Kapal {
    // Constructor to initialize age and color properties
    constructor() {
        this.age = 31;          // Set default age to 31
        this.color = 'Biru';    // Set default color to 'Biru'
    }

    // Getter method for the location property
    get location() {
        return "Canada";        // Always returns 'Canada' as the location
    }
}

// Export the Kapal class
module.exports = Kapal;

// Create an instance of the Kapal class
let kapal = new Kapal();

// Log the age property of the kapal instance
console.log(kapal.age);        // Outputs: 31

// Log the location property of the kapal instance
console.log(kapal.location);   // Outputs: Canada

// Log the color property of the kapal instance
console.log(kapal.color);      // Outputs: Biru
