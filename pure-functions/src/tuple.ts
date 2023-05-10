// tuple examples
let tuple1: any[] = [true, 1, "tuple!"];

const array: number[] = [0, 1, 0, 1];
const tuple2: [boolean, string] = [false, "true"];

// type alias example
// In TypeScript, tuples are a type that represents a collection of elements with a specific number and order of types.
// Tuples are similar to arrays in JavaScript, but the type of each element in a tuple is fixed and must match the specified type.
// In the function below, the ResultType tuple has a fixed number of elements (two) and a fixed order of types (boolean and string).
// When the doSomething function is called, it returns a tuple of type ResultType, which can be destructured to extract the two values (false and the error message) and assign them to separate variables.
type ResultType = [boolean, string];

const doSomething = (): ResultType => {
  try {
    throw new Error("error...?"); // It will throw new Error object(with the message 'error...?'),
  } catch (e) {
    return [false, e.message]; // and the catch phrase catches the thrown object and returns a tuple type of 'ResultType'
  }
};
