import fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .split("\n");
let splits = 0;
let Beams = new Set();
let done = false;
Beams.add(`0,${input[0].indexOf("S")}`);
while (!done) {
  let newBeams = new Set();
  for (let beam of Beams) {
    const [x, y] = beam.split(",").map((num) => parseInt(num));
    if (input[x + 1][y] == ".") {
      newBeams.add(`${x + 1},${y}`);
    } else if (input[x + 1][y] == "^") {
      newBeams.add(`${x + 1},${y - 1}`);
      newBeams.add(`${x + 1},${y + 1}`);
      splits++;
    }
  }
  Beams = newBeams;
  for (let beam of Beams) {
    const [x, y] = beam.split(",").map((num) => parseInt(num));
    if (x == input.length - 1) {
      done = true;
      break;
    }
  }
}
console.log(splits);
