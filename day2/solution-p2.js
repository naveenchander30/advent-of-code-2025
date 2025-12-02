import fs from "fs";

const ranges = fs.readFileSync("input.txt", "utf-8").trim().split(",");
let sum = 0;
for (const range of ranges) {
  let [start, end] = range.split("-");
  start = parseInt(start);
  end = parseInt(end);
  for (let i = start; i <= end; i++) {
    let str = i.toString();
    let match = str.match(/^(.+?)\1+$/);
    if (match) {
      sum += i;
    }
  }
}
console.log(sum);
