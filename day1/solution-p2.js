import fs from "fs";

const lines = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

let count = 0;
let reading = 50;

for (const line of lines) {
  const dir = line[0];
  const val = Number(line.slice(1));

  if (dir == "R") {
    count += Math.floor((reading + val) / 100);
    reading = (reading + val) % 100;
  } else {
    if (val >= reading) {
      if (reading == 0) {
        count += Math.floor(val / 100);
      } else {
        count += Math.floor((val - reading) / 100) + 1;
      }
    }
    reading = (((reading - val) % 100) + 100) % 100;
  }
}

console.log(count);
