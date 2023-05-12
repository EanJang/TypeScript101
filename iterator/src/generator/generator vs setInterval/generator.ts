// generator example: yield a sequence of numbers
function* generator() {
  console.log("GENERATOR EXECUTED");
  let value = 1;
  while (value < 4) yield value++;
}

// testing code
for (let value of generator()) console.log(value);
