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
