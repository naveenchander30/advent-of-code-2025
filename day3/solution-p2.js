import fs from "fs";

const banks = fs
  .readFileSync("input.txt", "utf-8")
  .replace(/\r/g, "")
  .trim()
  .split("\n");

let total = 0n;
const TARGET_LENGTH = 12;

for (const bank of banks) {
  const length = bank.length;
  let drops_allowed = bank.length - TARGET_LENGTH;
  const stack = [];
  for (const char of bank) {
    const currentDigit = parseInt(char);
    while (
      drops_allowed > 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] < currentDigit
    ) {
      stack.pop();
      drops_allowed--;
    }
    stack.push(currentDigit);
  }
  const trimmedStack = stack.slice(0, TARGET_LENGTH).join("");
  total += BigInt(trimmedStack);
}
console.log(total.toString());
