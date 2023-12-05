const fs = require("fs");

const entry = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const entries = entry.split("\n");

let sum = 0;
for (const entry of entries) {
  let digits = [];
  for (let i = 0; i < entry.length; i++) {
    const char = entry[i];
    if (char.match(/[1-9]/)) {
      digits.push(char);
    }
  }

  let num = [digits[0], digits[digits.length - 1]].join("");

  num = parseInt(num);

  // console.log(digits);
  // console.log(num);
  sum += num;
}

console.log(sum);
