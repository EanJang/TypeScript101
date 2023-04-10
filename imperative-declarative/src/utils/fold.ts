export const fold = <T>(array: T[], callback: (result: T, value: T) => T, initValue: T) => {
    let result: T = initValue
    for (let i = 0; i < array.length; ++i){
        const value = array[i]
        result = callback(result, value)
    }
    return result
}

// the fold function takes an array, an accumulator function, and an initial value,
// and returns the final accumulated value after applying the accumulator function to each element of the array.