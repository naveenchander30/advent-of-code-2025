import fs from "fs";

const banks = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
let total = 0;
for (const bank of banks) {
  const length = bank.length;
  let max = 0;
  let maxLeft = 0;
  for (let i = 0; i < length - 1; i++) {
    if (parseInt(bank[i]) >= maxLeft) {
      let maxRight = 0;
      maxLeft = parseInt(bank[i]);
      for (let j = i + 1; j < length; j++) {
        if (parseInt(bank[j]) > maxRight) {
          maxRight = parseInt(bank[j]);
        }
      }
      if (maxLeft * 10 + maxRight > max) {
        max = maxLeft * 10 + maxRight;
      }
    }
  }
  total += max;
}
console.log(total);
