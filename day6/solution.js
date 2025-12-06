import fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((line) => line.split(/\s+/));
let total = 0;
const rows = input.length;
for (let j = 0; j < input[0].length; j++) {
  let value;
  if (input[rows - 1][j] === "+") {
    value = 0;
    for (let i = 0; i < rows - 1; i++) {
      value += parseInt(input[i][j]);
    }
  } else if (input[rows - 1][j] === "*") {
    value = 1;
    for (let i = 0; i < rows - 1; i++) {
      value *= parseInt(input[i][j]);
    }
  }
  total += value;
}

console.log(total);
