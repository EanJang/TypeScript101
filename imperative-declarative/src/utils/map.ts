export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q):
Q[] => {
    let result: Q[] = []
    for (let index = 0; index < array.length; ++index) {
        const value = array[index]
        result = [...result, callback(value, index)]
    }
    return result
}

// The map function takes in an array of type `T`, and a callback function that takes a value of type `T` and an optional index of type `number`.
// Then it returns a new value of type `Q`. The purpose of the function is to apply the callback function to each element of the input array, returning a new array containing the corresponding output values.
// It works similarly to the built-in `Array.map()` method in JavaScript, but with a typed input and output.