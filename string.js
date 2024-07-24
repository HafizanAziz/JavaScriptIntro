let hari = 'Selasa'
console.log(hari) //Selasa
console.log(hari.length) //6

//Slice
let phari = hari.slice(0,3)
console.log(phari) // Sel

let allarrayday = hari[0]+hari[1]+hari[2]+hari[3]+hari[4]+hari[0]
console.log(hari[0])
console.log(hari[1])
console.log(hari[2])
console.log(hari[3])
console.log(hari[4])
console.log(hari[5])
console.log(hari[0]+hari[1]+hari[2]+hari[3]+hari[4]+hari[5])
console.log(allarrayday)


let hari2 = 'Rabu '
console.log(hari2.length) //5 included space
console.log(hari2.trim().length) //4 after removed the space

//
let date ='23'
let next_date = '28'

let diff_date = next_date - date
console.log(diff_date)

let hari3 = 'Friday '
let happy = hari3 + 'is Happy Day!!'
console.log(happy)