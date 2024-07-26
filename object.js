let person = {
    FirstName: 'John',
    LastName: 'Wick',
    Age: '31',
    FullName: function() 
    {
        return this.FirstName + this.LastName; // Function to compute and return the full name
    }
};

console.log(person.FullName()); // Output: JohnWick

console.log(person); // Output: { FirstName: 'John', LastName: 'Wick', Age: '31', FullName: [Function: FullName] }
console.log(person.LastName); // Output: Wick
console.log(person.FirstName); // Output: John

person.Gender = 'Male'; // Add Gender: 'Male' property to person object

console.log(person); // Output: { FirstName: 'John', LastName: 'Wick', Age: '31', FullName: [Function: FullName], Gender: 'Male' }

delete person.LastName; // Delete LastName property from person Object

console.log(person); // Output: { FirstName: 'John', Age: '31', FullName: [Function: FullName], Gender: 'Male' }

console.log('LastName' in person); // Check the existence of the LastName property in person Object - Output: false
console.log('FirstName' in person); // Check the existence of the FirstName property in person Object - Output: true

for (let key in person) { // Iterate through each property in person object
    console.log(person[key]); // Output each property value
}
