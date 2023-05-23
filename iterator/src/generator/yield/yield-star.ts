function* generate12() {
  yield 1;
  yield 2;
}

function* generate345() {
  yield* generate12();
  yield* [3, 4];
  yield 5;
}
