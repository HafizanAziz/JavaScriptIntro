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

delete person.Gender
console.log(person)

