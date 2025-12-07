import fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .split("\n");
let timeLines = new Set();
let completedTimeLines = new Set();
timeLines.add(`0,${input[0].indexOf("S")}`);
while (timeLines.size > 0) {
  let newTimeLines = new Set();
  for (let timeLine of timeLines) {
    let path = timeLine.split("-");
    const [x, y] = path[path.length - 1].split(",").map((num) => parseInt(num));
    if (x == input.length - 1) {
      completedTimeLines.add(timeLine);
      continue;
    }
    if (input[x + 1][y] == ".") {
      let newTimeLine = timeLine + `-${x + 1},${y}`;
      newTimeLines.add(newTimeLine);
    } else if (input[x + 1][y] == "^") {
      let newTimeLine1 = timeLine + `-${x + 1},${y - 1}`;
      let newTimeLine2 = timeLine + `-${x + 1},${y + 1}`;
      newTimeLines.add(newTimeLine1);
      newTimeLines.add(newTimeLine2);
    }
  }
  timeLines = newTimeLines;
}
console.log(completedTimeLines.size);
