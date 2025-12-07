import fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .split("\n");
const rows = input.length;
const cols = input[0].length;
let activeBeams = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
activeBeams[0][input[0].indexOf("S")] = 1;
for(let i=0; i<rows-1; i++) {
    for(let j=0; j<cols; j++) {
        if(activeBeams[i][j] > 0) {
            if(input[i+1][j] == ".") {
                activeBeams[i+1][j] += activeBeams[i][j];
            } else if(input[i+1][j] == "^") {
                if(j-1>=0) {
                    activeBeams[i+1][j-1] += activeBeams[i][j];
                }
                if(j+1<cols) {
                    activeBeams[i+1][j+1] += activeBeams[i][j];
                }
            }
        }
    }
}
let totalTimeLines = 0;
for(let j=0; j<cols; j++) {
    totalTimeLines += activeBeams[rows-1][j];
}
console.log(totalTimeLines);