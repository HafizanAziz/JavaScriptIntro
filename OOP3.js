// Constructor function for creating Person objects with given properties
function Person(firstName, lastName, age, location, height) 
{
    this.firstName = firstName; // Assigns the first name
    this.lastName = lastName; // Assigns the last name
    this.age = age; // Assigns the age
    this.location = location; // Assigns the location
    this.height = height; // Assigns the height in centimeters
}

// Adding a method to the prototype of Person objects to get the full name
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName; // Returns the full name
};

// Adding a method to the prototype of Person objects to get full details
Person.prototype.getFullDetails = function() {
    return this.firstName + ' ' + this.lastName + ', Age: ' + this.age + ', Location: ' + this.location + ', Height: ' + this.height + ' cm'; // Returns full details
};

// Adding a method to calculate the age in months
Person.prototype.getAgeInMonths = function() {
    return this.age * 12; // Returns the age in months
};

// Adding a method to convert height to meters
Person.prototype.getHeightInMeters = function() {
    return this.height / 100; // Returns the height in meters
};

// Creating instances (objects) of Person
let person1 = new Person('Alice', 'Johnson', 28, 'Canada', 165); // Creates person1
let person2 = new Person('Bob', 'Brown', 32, 'Australia', 175); // Creates person2

// Using the objects and methods
console.log(person1.getFullName()); // Output: Alice Johnson
console.log(person2.getFullName()); // Output: Bob Brown

console.log(person1.age); // Output: 28
console.log(person2.age); // Output: 32

console.log(person1.location); // Output: Canada
console.log(person2.location); // Output: Australia

console.log(person1.height); // Output: 165
console.log(person2.height); // Output: 175

console.log(person1.getFullDetails()); // Output: Alice Johnson, Age: 28, Location: Canada, Height: 165 cm
console.log(person2.getFullDetails()); // Output: Bob Brown, Age: 32, Location: Australia, Height: 175 cm

console.log(person1.getAgeInMonths()); // Output: 336
console.log(person2.getAgeInMonths()); // Output: 384

console.log(person1.getHeightInMeters()); // Output: 1.65
console.log(person2.getHeightInMeters()); // Output: 1.75
