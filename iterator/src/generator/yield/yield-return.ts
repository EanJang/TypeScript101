const random = (max, min = 0) => Math.round(Math.random() * (max - min)) + min;
function* gen() {
  let count = 5;
  let select = 0;
  while (count--) {
    select = yield `you selected ${select}`;
  }
}

const iter = gen();
while (true) {
  const { value, done } = iter.next(random(10, 1));
  if (done) break;
  console.log(value);
}

/**
The code defines a helper function `random` that generates a random number between a specified range.
The `gen` generator function is defined using the `function*` syntax. It creates an iterator that produces a sequence of values.
Inside the `gen` generator function, there are two variables: `count` and `select`. 
    `count` is initially set to 5, and `select` is set to 0.
The `gen` generator function has a while loop that iterates while count is truthy (not zero). 
    During each iteration, the loop decreases count by one (count--).
Inside the loop, the line `select = yield you selected ${select};` contains the `yield` keyword. 
    It yields the string 'you selected ${select}' as a value to the caller, which will be consumed by the iterator.
The interesting part is that the yield statement is an expression and not just a plain value. 
    It assigns the value passed by the iterator back into the select variable. 
    This means that when the generator is iterated over, the value passed to iter.next() will be assigned to select.
The code outside the `gen` generator function creates an iterator iter by calling `gen()`. 
    It initializes the generator and gets an iterator object.
There is an infinite while loop `while (true)` that keeps iterating until it encounters a break statement.
    Within each iteration of the while loop, `iter.next(random(10, 1))` is called to get the next value from the iterator. 
    The `random(10, 1)` expression generates a random number between 1 and 10, which is passed as the value to the generator.
The result of `iter.next()` is an object with two properties: `value` and `done`. 
    `value` holds the value yielded by the generator, and `done` indicates if the generator has finished (true) or not (false).
If `done` is true, it means the generator has finished iterating, so the break statement is executed to exit the loop.
If `done` is false, the value is printed to the console using `console.log(value)`.
The output of the code will be a sequence of randomly generated numbers between 1 and 10, with the message 'you selected ${select}' for each iteration.
*/
