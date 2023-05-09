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
