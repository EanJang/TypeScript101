Here are sample codes of generating a sequence of numbers to compare a generator function and `setInterval`:

### Generator function

```javascript
function* numberSequence() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const sequence = numberSequence();
console.log(sequence.next().value); // Output: 1
console.log(sequence.next().value); // Output: 2
console.log(sequence.next().value); // Output: 3
```

### setInterval

```javascript
let i = 1;
const intervalId = setInterval(() => {
  console.log(i++);
}, 1000);

// Stop the interval after 3 seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 3000);
```

In both cases, we're generating a sequence of numbers that starts with 1 and increments by 1 each time. However, the two approaches use different mechanisms to achieve this.

The generator function uses a `while` loop and the `yield` keyword to generate the sequence of numbers. The `yield` keyword allows the function to pause execution and return a value to the caller, which can then resume execution at a later time. In this way, the generator function provides a way to lazily generate a sequence of values.

On the other hand, `setInterval` is a built-in function that repeatedly executes a specified function at a fixed interval. In this case, we're using `setInterval` to execute a function that logs the current value of `i` to the console and increments it by 1 each time. The interval continues until we explicitly stop it using `clearInterval`.

While both approaches can be used to generate a sequence of numbers, the generator function is more flexible and allows for more fine-grained control over the sequence generation process. It also allows us to pause and resume the sequence generation at any point, which can be useful in some scenarios.

In contrast, `setInterval` provides a simpler way to generate a sequence of values at fixed intervals. However, it can be less flexible and harder to control than a generator function.
