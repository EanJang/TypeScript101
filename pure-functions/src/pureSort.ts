const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [...array];
  return deepCopied.sort();
};

// this function takes an array of any type T, creates a deep copy of it, sorts the copy in ascending order, and returns the sorted copy.
// Because the input array is not modified, this function is considered "pure".

// <T> -> This is a generic type parameter, which allows us to specify a type that can be used throughout the function without knowing the specific type until the function is called.
//      In this case, <T> specifies a type that is determined when the function is called.
// (array: readonly T[]) -> This is the function parameter. It expects an array of type T, which is specified by the generic type parameter <T>.
//      The readonly keyword indicates that the array should not be modified within the function, which makes this function 'pure'.
// : T[] -> This is the return type of the function. It indicates that the function will return an array of type T.
