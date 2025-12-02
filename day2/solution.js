import fs from "fs";

const ranges = fs.readFileSync("input.txt", "utf-8").trim().split(",");
let sum = 0;
for (const range of ranges) {
  let [start, end] = range.split("-");
  start = parseInt(start);
  end = parseInt(end);
  for (let i = start; i <= end; i++) {
    let str = i.toString();
    const length = str.length;
    if (length % 2 === 0) {
      let mid = length / 2;
      let firstHalf = str.slice(0, mid);
      let secondHalf = str.slice(mid);
      if (firstHalf === secondHalf) {
        sum += i;
      }
    } else {
      continue;
    }
  }
}
console.log(sum);
