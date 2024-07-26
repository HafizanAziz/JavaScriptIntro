// Constructor function for creating Person objects with given properties
function Person(firstName, lastName, age, location) 
{
    this.firstName = firstName; // Assigns the first name
    this.lastName = lastName; // Assigns the last name
    this.age = age; // Assigns the age
    this.location = location; // Assigns the location
}

// Adding a method to the prototype of Person objects to get the full name
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName; // Returns the full name
};

// Adding a method to the prototype of Person objects to get full details
Person.prototype.getFullDetails = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.age + ' ' + this.location; // Returns full details
};

// Creating instances (objects) of Person
let person1 = new Person('John', 'Doe', 30, 'Malaysia'); // Creates person1
let person2 = new Person('Jane', 'Smith', 25, 'Singapore'); // Creates person2

// Using the objects and methods
console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith

console.log(person1.age); // Output: 30
console.log(person2.age); // Output: 25

console.log(person1.location); // Output: Malaysia
console.log(person2.location); // Output: Singapore

console.log(person1.getFullDetails()); // Output: John Doe 30 Malaysia
console.log(person2.getFullDetails()); // Output: Jane Smith 25 Singapore
console.log(person1.getFullDetails() + ' ' + person2.getFullDetails()); // Output: John Doe 30 Malaysia Jane Smith 25 Singapore
