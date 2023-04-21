// impure function examples

// The `impure1` function has side effects that modify the state of its input argument(array parameter).
// push() method adds a new element to the end of the original array,
// and splice() method removes elements from the array starting at a given index and optionally inserts new elements in their place.
// By modifying the input argument, he impure1 function changes the state of the array outside of its scope,
// which can lead to unexpected behavior in other parts of the program that rely on the original state of the array.
// This makes the function impure and harder to reason about.
function impure1(array: number[]): void {
  array.push(1);
  array.splice(0, 1);
}

// The impure2 function is also impure, because it depends on the global variable g to compute its result.
// The use of global variables can lead to unexpected behavior and make it difficult to reason about the function's behavior.
// If `g` changes value at some point outside of the impure2 function, then the result of calling impure2 with the same input value may change as well,
// even though the function itself did not change. This makes the function impure, as its result can depend on factors outside of its own scope.
let g = 10;
function impure2(x: number) {
  return x + g;
}

// To make this function pure, you could pass g as an additional parameter to the function, like this:
function pure2(x: number, g: number): number {
  return x + g;
}
// This makes it clear that g is a parameter that affects the function's behavior, rather than a global variable that could change at any time.
