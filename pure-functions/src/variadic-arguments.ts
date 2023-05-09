// variadic arguments allows a function to accept an arbitrary number of arguments.
// export const `function name` = (...arguments) => {}

// example
export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const array: T[] = arrays[i];

    result = [...result, ...array];
  }

  return result;
};
// <T>
//    -> a generic type parameter to make the function work with any type of data
// (...arrays: readonly T[][])
//    -> a rest parameter that allows the function to accept an unspecified number of arrays of type T.
//       the `readonly` keyword makes sure the arrays cannot be modified within the function.
// : T[] =>
//    -> indicates the return type of the function is an array of type `T`
// let result: T[] = [];
//    -> initializes an empty array result of type T and loops through each array passed as an argument using a for loop.
//       the current array is extracted from the rest parameter `arrays` in each loop.
// result = [...result, ...array];
//    -> spread operator is used here to concatenate `result` and `array`

// test
const merged1: string[] = mergeArray(["Hello"], ["World"]);
const merged2: number[] = mergeArray([2, 0], [2], [3]);

console.log(merged1, merged2);
