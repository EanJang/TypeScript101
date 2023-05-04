const pureDelete = <T>(
  array: readonly T[],
  callBack: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => callBack(val, index) == false);

// This function takes an array and a callback function as input. It then applies the filter() method to the input array and checks each element of the array against the callback function.
// If the callback function returns false for an element, that element is excluded from the new array that is returned by the function.
// This function essentially "deletes" elements from the input array based on whether they satisfy a given condition.

// const pureDelete = <T>(array: readonly T[], cb: (val: T, index?: number) => boolean): T[] =>
//  -> This is the function definition. It takes two arguments - an array of type T (array) and a callback function that takes a value of type T and an optional index of type number, and returns a boolean (cb).
//     It also specifies that the function will return an array of type T.
// array.filter((val, index) => { cb(val, index) == false; });
//  -> This is the main body of the function. It takes the input array and applies the filter() method to it.
//     The filter() method creates a new array that includes all elements of the original array for which the callback function returns true.
//     In this case, the callback function is defined as (val, index) => { cb(val, index) == false; }.
//     It takes two arguments - val (a value from the array) and index (an optional index of the value in the array) - and checks if the result of calling the cb() function with those arguments is false.
//     If the result is false, the element is excluded from the new array.

// Testing pureDelete function!
const mixedArray: object[] = [
  [],
  { name: "Jack" },
  { name: "Jane", age: 32 },
  ["description"],
];
const objectsOnly: object[] = pureDelete(mixedArray, (val) =>
  Array.isArray(val)
);

console.log(mixedArray, objectsOnly); // [ [], { name: 'Jack' }, { name: 'Jane', age: 32 }, [ 'description' ] ], [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]
