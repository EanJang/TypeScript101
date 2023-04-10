export const range = (from: number, to: number): number[] =>
    from < to ? [from, ...range(from + 1, to)] : []


// The range function is a recursive function that takes in two arguments, `from` and `to`, both of which are numbers. The purpose of the function is to return an array of numbers from `from` to `to`, inclusive of both endpoints.
// The function works by checking whether `from` is less than `to`. If it is, the function recursively calls itself with `from + 1` as the new `from` argument until `from` is no longer less than `to`. At that point, the function returns an empty array [].
// When the function is called with `from` less than `to`, the function constructs an array containing from followed by the results of calling range with `from + 1` and `to`. The spread operator `...` is used to spread the results of the recursive call into the new array.
// For example, calling range(1, 5) would return [1, 2, 3, 4, 5].