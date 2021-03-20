const numbers = [1, -1, 2, 3]

const elements = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)

console.log(elements)

const numbers2 = [1, -1, 2, 3, 7]
// let sum = 0
// for(let n of numbers)
//   sum += n


const sum = numbers.reduce((accumulator, currentValue) =>
   accumulator + currentValue, 0)
// the second value is the initial value of the accumulator
console.log(sum)