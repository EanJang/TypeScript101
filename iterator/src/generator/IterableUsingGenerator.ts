class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(private values: T[] = [], private currentIndex: number = 0) {}
  [Symbol.iterator] = function* () {
    while (this.currentIndex < this.values.length)
      yield this.values[this.currentIndex++];
  };
}

// The `IterableUsingGenerator` class enables iteration over its values using a `for...of` loop or any other mechanism that supports iteration over iterables,
// by implementing the Iterable interface and providing a generator function as the iterator.

// class IterableUsingGenerator<T> implements Iterable<T> { ... }:
//  This line declares a class named IterableUsingGenerator that takes a generic type parameter T and implements the Iterable<T> interface.
//  The Iterable<T> interface specifies that the class should provide an iterator.

// constructor(private values: T[] = [], private currentIndex: number = 0) { ... }:
//  This is the class constructor. It takes two optional parameters: values of type T[] (an array of type T) and currentIndex of type number.
//  The parameters have private access modifiers (private keyword), which means they can only be accessed within the class. The constructor initializes the values array and the currentIndex to their default values if no arguments are provided.

// [Symbol.iterator] = function* () { ... }:
//  This line defines a generator function as the implementation of the Symbol.iterator property, which is used to make an object iterable.
//  The Symbol.iterator is a well-known symbol in JavaScript that represents the iterator method. In this case, the generator function is defined using the function* syntax, indicating that it's a generator.

// while (this.currentIndex < this.values.length) yield this.values[this.currentIndex++];:
//  This is the body of the generator function. It uses a while loop to iterate over the values in the values array.
//  The loop continues as long as the currentIndex is less than the length of the values array. On each iteration, the generator yields the value at the current index (this.values[this.currentIndex]) and increments the currentIndex using the post-increment operator (this.currentIndex++).
