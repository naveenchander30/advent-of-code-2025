import fs from "fs";

const input = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .split("\n\n");

let total = 0;

let ranges = input[0]
  .split("\n")
  .map((line) => {
    const [min, max] = line
      .trim()
      .split("-")
      .map((num) => parseInt(num));
    return [min, max];
  })
  .sort((a, b) => a[0] - b[0]);

let merged = [];
let [currMin, currMax] = ranges[0];
for (let i = 1; i < ranges.length; i++) {
  const [nextMin, nextMax] = ranges[i];
  if (nextMin <= currMax + 1) {
    currMax = Math.max(currMax, nextMax);
  } else {
    merged.push([currMin, currMax]);
    total += currMax - currMin + 1;
    [currMin, currMax] = [nextMin, nextMax];
  }
}

merged.push([currMin, currMax]);
total += currMax - currMin + 1;

console.log(total);
