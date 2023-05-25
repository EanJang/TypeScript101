## next() method in JavaScript/TypeScript

JS/TS generators are powerful tools that allow us to create functions that can be paused and resumed, enabling us to generate a sequence of values over time. A generator is a special type of function that uses the `function*` syntax instead of the usual `function` keyword. Within a generator, we can use the `yield` keyword to pause the execution of the function and produce a value. This unique behaviour allows generators to generate a series of values on demand.

The `next()` method is a built-in method that can be called on a generator object. When invoked, it resumes the execution of the generator function until the next `yield` statement is encountered. The method returns an object with two properties: `value` and `done`.

1.  `value`: This property holds the value yielded by the generator. If there is no `yield` statement, the `value` property will be `undefined`.
2.  `done`: This property indicates whether the generator has finished executing. It is a boolean value, `true` if the generator has reached the end, and `false` otherwise.

Apart from the `yield` statement, generators can also be terminated using a `return` statement. When a generator is terminated via `return`, subsequent calls to `next()` will always return `{ value: undefined, done: true }`.

```javascript
function* exampleGenerator() {
  yield "Hello";
  return "World";
  yield "This will not be reached";
}

const generator = exampleGenerator();
console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: true }
console.log(generator.next()); // { value: undefined, done: true }
```
