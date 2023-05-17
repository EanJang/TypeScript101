export function* rangeGenerator(from: number, to: number) {
  let value = from;
  while (value < to) {
    yield value++;
  }
}

// test rangeGenerator!
let iterator = rangeGenerator(1, 7 + 1);

// `while` pattern
while (1) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log("while::", value);
}

// `for...of` pattern
for (let value of rangeGenerator(8, 10 + 1)) console.log("for...of::", value);
