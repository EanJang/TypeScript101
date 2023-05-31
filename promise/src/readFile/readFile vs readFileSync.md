## readFile vs readFileSync

`readFile` and `readFileSync` are functions from the Node.js `fs` module to read the contents of a file.

### `readFile`: Asynchronous

The `readFile` function is asynchronous and uses a callback function to handle the result. It takes two parameters: the file path and a callback function.
When the `readFile` function is called with the file path, it will initiate the file read operation. Once it completes, it will invoke the provided callback function.
If an error occurs during the operation, it will be passed as the first argument to the callback. If the operation is successful, the file contents will be passed as a buffer to the callback. Inside the callback, the buffer is converted to a string using `buffer.toString()`, and then the content is logged to the console.

### `readFileSync`: Synchronous

The `readFileSync` function is synchronous, which means it blocks the execution until the file read operation is complete. It takes the file path as a parameter and returns the file contents directly.
When the `readFileSync` function is called with the file path, it will read the file synchronously and return the file contents as a buffer. The buffer is then converted to a string just like the `readFile` function.

The key difference between `readFile` and `readFileSync` is their sync vs async nature. `readFile` allows non-blocking I/O by utilising a callback, while `readFileSync` blocks the execution until the file read operation is complete. As a result, `readFile` is generally recommended for handling I/O operations in scenarios where you want to avoid blocking the event loop, such as when handling multiple concurrent requests in a server application. On the other hand, `readFileSync` can be useful in certain scenarios where synchronous execution is acceptable, such as in command-line scripts or when dealing with initialisation tasks that depend on file contents.
