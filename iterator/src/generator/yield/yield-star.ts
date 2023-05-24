function* generate12() {
  yield 1;
  yield 2;
}

function* generate12345() {
  yield* generate12();
  yield* [3, 4];
  yield 5;
}

// Test generators!
for (let value of generate12345()) console.log(value); //1 2 3 4 5

// yield:
//  In the `generate12()` function, `yield` is used to product the values 1 and 2.
//  When yield is encountered, the generator pauses and emits the specified value to the caller.

// yield*:
//  In the `generate12345()` function, `yield*` is used to delegate the iteration control to other iterable expressions.
//  `yield* generate12()` delegates the iteration control to the `generate12()` function, which yields the values 1 and 2.
//  `yield* [3, 4]` delegates the iteration control to the array `[3, 4]`, which is also an iterable object.
