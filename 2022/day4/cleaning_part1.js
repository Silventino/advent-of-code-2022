const fs = require("fs");

const entry = fs.readFileSync("./entry.txt", { encoding: "utf-8" });
const pairs = entry.split("\n").map((item) => item.split(","));

let fullyOverlapedPairs = 0;
let partiallyOverlapedPairs = 0;
for (let i = 0; i < pairs.length; i++) {
  const pair = pairs[i];
  const rangeOne = pair[0].split("-").map((item) => parseInt(item));
  const rangeTwo = pair[1].split("-").map((item) => parseInt(item));

  if (rangeOne[0] <= rangeTwo[0] && rangeOne[1] >= rangeTwo[1]) {
    fullyOverlapedPairs += 1;
  } else if (rangeTwo[0] <= rangeOne[0] && rangeTwo[1] >= rangeOne[1]) {
    fullyOverlapedPairs += 1;
  }

  if (
    (rangeOne[0] >= rangeTwo[0] && rangeOne[1] <= rangeTwo[1]) ||
    (rangeOne[1] >= rangeTwo[0] && rangeOne[1] <= rangeTwo[1])
  ) {
    partiallyOverlapedPairs += 1;
  } else if (
    (rangeTwo[0] >= rangeOne[0] && rangeTwo[1] <= rangeOne[1]) ||
    (rangeTwo[1] >= rangeOne[0] && rangeTwo[1] <= rangeOne[1])
  ) {
    partiallyOverlapedPairs += 1;
  }
}

console.log("Fully overlaped pairs:", fullyOverlapedPairs);
console.log("Partially overlaped pairs:", partiallyOverlapedPairs);
