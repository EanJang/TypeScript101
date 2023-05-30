import { readFileSync, readFile } from "fs";

// Reading package.json synchronously
console.log("--------synchronous API--------");
const buffer: Buffer = readFileSync("../package.json");
console.log(buffer.toString());

// Reading package.json asynchronously
readFile("../package.json", (error: Error, buffer: Buffer) => {
  console.log("--------asynchronous API--------");
  console.log(buffer.toString());
});

// Reading package.json with Promise and async/await
const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if (error) reject(error);
      else resolve(buffer.toString());
    });
  });

(async () => {
  const content = await readFilePromise("../package.json");
  console.log("--------Promise and sync/await--------");
  console.log(content);
})();

/**
 * This code demonstrates different approaches to read the contents of a file using different APIs in Node.js: synchronously, asynchronously with a callback, and using promises with async/await.
 * First, the code imports two functions, readFileSync and readFile, from the Node.js "fs" module. These functions are used for file system operations.
 * The code then proceeds to read the "package.json" file in three different ways:
 * 
 * 1. Synchronous API: 
 *  The readFileSync function is used synchronously to read the file. It returns a Buffer object containing the file's contents. 
 *  The code then converts the buffer to a string using the toString() method and logs it to the console.
 * 
 * 2. Asynchronous API:
 *  The readFile function is used asynchronously to read the file. It takes a callback function that is called once the file is read. 
 *  The callback function receives an error object (if any) and a Buffer object containing the file's contents. The code logs the contents of the file to the console within the callback function.
 * 
 * 3. Promise and async/await:
 *  This part of the code defines a function readFilePromise that returns a promise. The promise is resolved with the file's contents as a string or rejected with an error if any occurs. 
 *  Inside the function, the readFile function is used to read the file, and depending on whether an error occurs or not, the promise is resolved or rejected.
 *  Then, an immediately invoked async function is defined and called. Within this function, the readFilePromise function is called using await to asynchronously read the file. 
 *  The resolved content is stored in the content variable, and it is then logged to the console.
 * 
 * 
 * Result:
 * --------synchronous API--------
{
  "name": "promise",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.2.5",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  }
}

--------asynchronous API--------
{
  "name": "promise",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.2.5",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  }
}

--------Promise and sync/await--------
{
  "name": "promise",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.2.5",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  }
}
 */
