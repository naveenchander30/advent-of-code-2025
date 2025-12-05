import fs from "fs";

const input = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .split("\n\n");

const ranges = input[0]
  .split("\n")
  .map((line) => {
    const [min, max] = line
      .trim()
      .split("-")
      .map((num) => parseInt(num));
    return [min, max];
  })
  .sort((a, b) => a[0] - b[0]);
const available = input[1]
  .split("\n")
  .map((line) => parseInt(line.trim()))
  .sort((a, b) => a - b);

let total = 0;
for (const num of available) {
  if (num < ranges[0][0]) continue;
  for (const [min, max] of ranges) {
    if (num >= min) {
      if (num <= max) {
        total++;
        break;
      }
    }
  }
}
console.log(total);
