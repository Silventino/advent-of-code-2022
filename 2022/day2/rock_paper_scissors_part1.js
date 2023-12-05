// A or X for Rock
// B or Y for Paper
// C or Z for Scissors

const fs = require("fs");

const entry = fs.readFileSync("./entry.txt", { encoding: "utf-8" });
const entries = entry.split("\n").map((item) => item.split(" "));

const points = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

const pointsForChoosing = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};

let total = 0;
for (let i = 0; i < entries.length; i++) {
  const round = entries[i];
  total += points[round[0]][round[1]];
  total += pointsForChoosing[round[1]];
}

console.log(total);
