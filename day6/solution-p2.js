import fs from "fs";
const rawInput = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .split("\n");

const length = Math.max(...rawInput.map((l) => l.length));
const input = rawInput.map((l) => l.padEnd(length, " "));
const rows = input.length;

let total = 0;
let values = [];

function isColumnEmpty(col) {
  for (let r = 0; r < rows; r++) {
    if (input[r][col] !== " ") return false;
  }
  return true;
}

let i = 0;
while (i < length) {
  if (!isColumnEmpty(i)) {
    let startIndex = i;
    while (i < length && !isColumnEmpty(i)) {
      i++;
    }
    let endIndex = i;

    let operator;
    for (let k = startIndex; k < endIndex; k++) {
      if (input[rows - 1][k] == "+" || input[rows - 1][k] == "*") {
        operator = input[rows - 1][k];
      }
    }

    let value = [operator];
    for (let j = 0; j < input.length - 1; j++) {
      let numStr = input[j].slice(startIndex, endIndex);
      value.push(numStr);
    }
    values.push(value);
  } else {
    i++;
  }
}

for (const valueArr of values) {
  let value;
  if (valueArr[0] == "+") {
    value = 0;
    for (let i = 0; i < valueArr[1].length; i++) {
      let str = "";
      for (let j = 1; j < valueArr.length; j++) {
        str += valueArr[j][i];
      }
      if (str.trim()) {
        value += parseInt(str);
      }
    }
    total += value;
  } else if (valueArr[0] == "*") {
    value = 1;
    for (let i = 0; i < valueArr[1].length; i++) {
      let str = "";
      for (let j = 1; j < valueArr.length; j++) {
        str += valueArr[j][i];
      }
      if (str.trim()) {
        value *= parseInt(str);
      }
    }
    total += value;
  }
}

console.log(total);
