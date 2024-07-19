var marks = new Array(10,20,40,60,80,100,200)

console.log(marks[3])//60
marks[5]=99.99 // 100 -> 99.99
console.log(marks) // [ 10, 20, 40, 60, 80, 99.99, 200 ]
console.log(marks.length) // 7
marks.push(1) // [ 10, 20, 40, 60, 80, 99.99, 200, 1 ] -- push the new value "1" to the end of the array
marks.push(2) // [ 10, 20, 40, 60, 80, 99.99, 200, 1, 2 ] -- push the new value "2" to the end of the array
console.log(marks)//  10, 20, 40, 60, 80, 99.99, 200, 1, 2 ]
marks.pop() // [ 10, 20, 40, 60, 80, 99.99, 200, 1 ] -- remove the last value which is 2
console.log(marks) // [ 10, 20, 40, 60, 80, 99.99, 200, 1 ]
marks.unshift(111)// [ 10, 20, 40, 60, 80, 99.99, 200, 1 ] -- add "111" at the beginning of the array
console.log(marks) // [111, 10, 20, 40, 60, 80, 99.99, 200, 1]
console.log(marks.length)// print length of the arraay
console.log(marks.includes(80)) //check true or false for the existing of the value "80" from the array - return true
console.log(marks.includes(999))//check true or false for the existing of the value "999" from the array - return false

Slicemarks = marks.slice(3,8) //Slice the array to the specific length from postion 3 to before 8 (position 7)
console.log(Slicemarks) // print [ 40, 60, 80, 99.99, 200 ] from [111, 10, 20, 40, 60, 80, 99.99, 200, 1]

var sum = 0
for(let i=0; i<marks.length;i++)
{
    sum = sum + marks[i]

}
console.log(sum )


//Reduce
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
