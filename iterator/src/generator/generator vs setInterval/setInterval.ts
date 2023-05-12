const period = 1000;
let count = 0;
console.log("PROGRAM STARTED");

const id = setInterval(() => {
  if (count >= 3) {
    clearInterval(id);
    console.log("PROGRAM FINISHED");
  } else console.log(++count);
}, period);
