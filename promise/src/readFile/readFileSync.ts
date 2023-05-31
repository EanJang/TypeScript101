import { readFileSync } from "fs";

const buffer: Buffer = readFileSync("../sync-async-Promise.ts");
const content: string = buffer.toString();
console.log(content);
