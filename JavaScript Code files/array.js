var name1 = new Array(10,20,40,60,80,100,200)

console.log(name1[3])//60
name1[5]=99.99 // 100 -> 99.99
console.log(name1) // [ 10, 20, 40, 60, 80, 99.99, 200 ]
console.log(name1.length) // 7
name1.push(1) // [ 10, 20, 40, 60, 80, 99.99, 200, 1 ] -- push the new value "1" to the end of the array
name1.push(2) // [ 10, 20, 40, 60, 80, 99.99, 200, 1, 2 ] -- push the new value "2" to the end of the array
console.log(name1)//  10, 20, 40, 60, 80, 99.99, 200, 1, 2 ]
name1.pop() // [ 10, 20, 40, 60, 80, 99.99, 200, 1 ] -- remove the last value which is 2
console.log(name1) // [ 10, 20, 40, 60, 80, 99.99, 200, 1 ]