import { range } from "./utils/range";
import { fold } from "./utils/fold";

let numbers: number[] = range(1, 100 + 1)
let result = fold(numbers, (result, value) => result + value, 0)
console.log(result); // 5050