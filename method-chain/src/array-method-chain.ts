const multiply = (result, val) => result * val

let numbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tempResult = numbers
    .filter(val => val % 2 != 0) // returns a new array containing only the odd numbers from the numbers array.
    .map(val => val * val) //squares each element of the filtered array.
    .reduce(multiply, 1) // multiplies all the element of the mapped array together, starting with an initial value 1.
let result = Math.round( Math.sqrt(tempResult) ) // takes the square root of 'tempResult' and round the results to the nearest integer.

console.log(result); // 945