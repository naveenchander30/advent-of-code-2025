import fs from "fs";

const input = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .trim()
  .split("\n");
let total = 0;

let neighbourMatrix = Array.from({ length: input.length }, () =>
  Array(input[0].length).fill(0)
);
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === ".") continue;
    let directions = [];
    if (i > 0 && j > 0 && i < input.length - 1 && j < input[i].length - 1) {
      directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1], // right
        [-1, -1], // up-left
        [-1, 1], // up-right
        [1, -1], // down-left
        [1, 1], // down-right
      ];
    }
    if (i === 0) {
      if (j > 0 && j < input[i].length - 1) {
        directions = [
          [0, -1], // left
          [0, 1], // right
          [1, 0], // down
          [1, -1], // down-left
          [1, 1], // down-right
        ];
      } else if (j === 0) {
        directions = [
          [0, 1], // right
          [1, 0], // down
          [1, 1], // down-right
        ];
      } else if (j === input[i].length - 1) {
        directions = [
          [0, -1], // left
          [1, 0], // down
          [1, -1], // down-left
        ];
      }
    } else if (i === input.length - 1) {
      if (j > 0 && j < input[i].length - 1) {
        directions = [
          [0, -1], // left
          [0, 1], // right
          [-1, 0], // up
          [-1, -1], // up-left
          [-1, 1], // up-right
        ];
      } else if (j === 0) {
        directions = [
          [0, 1], // right
          [-1, 0], // up
          [-1, 1], // up-right
        ];
      } else if (j === input[i].length - 1) {
        directions = [
          [0, -1], // left
          [-1, 0], // up
          [-1, -1], // up-left
        ];
      }
    }
    if (j === 0) {
      if (i > 0 && i < input.length - 1) {
        directions = [
          [-1, 0], // up
          [1, 0], // down
          [0, 1], // right
          [-1, 1], // up-right
          [1, 1], // down-right
        ];
      }
    } else if (j === input[i].length - 1) {
      if (i > 0 && i < input.length - 1) {
        directions = [
          [-1, 0], // up
          [1, 0], // down
          [0, -1], // left
          [-1, -1], // up-left
          [1, -1], // down-left
        ];
      }
    }

    for (const [dx, dy] of directions) {
      let x = i + dx;
      let y = j + dy;
      neighbourMatrix[x][y]++;
    }
  }
}

for (let i = 0; i < neighbourMatrix.length; i++) {
  for (let j = 0; j < neighbourMatrix[i].length; j++) {
    if (neighbourMatrix[i][j] < 4 && input[i][j] == "@") {
      total += 1;
    }
  }
}
console.log(total);
