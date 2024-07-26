// Constructor function for creating Person objects
function Person(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
}

// Adding a method to the prototype of Person objects
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

Person.fulldetails.getFulldetails = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.age + ' ' + this.location;
};

// Creating instances (objects) of Person
let person1 = new Person('John', 'Doe', 30, 'Malaysia');
let person2 = new Person('Jane', 'Smith', 25, 'Singapore');

// Using the objects and methods
console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith

console.log(person1.age); // Output: 30
console.log(person2.age); // Output: 25

console.log(person1.location);
console.log(person2.location);

console.log(fulldetails.getFulldetails())
