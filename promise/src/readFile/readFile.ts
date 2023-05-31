import { readFile } from "fs";

readFile("../sync-async-Promise.ts", (err: Error, buffer: Buffer) => {
  if (err) throw err;
  else {
    const content: string = buffer.toString();
    console.log(content);
  }
});
