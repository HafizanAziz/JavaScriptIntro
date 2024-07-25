let person = 
{
    FirstName:'John',
    LastName:'Wick'

}

console.log(person) // { FirstName: 'John', LastName: 'Wick' }
console.log(person.LastName) // Wick
console.log(person.FirstName) //John

person.Gender='Male' // add Gender:Male property to person object

console.log(person) //{ FirstName: 'John', LastName: 'Wick', Gender: 'Male' }

delete person.LastName // delete LastName property from person Object
console.log(person) // { FirstName: 'John', Gender: 'Male' }

console.log('LastName' in person)