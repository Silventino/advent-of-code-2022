// A for Rock
// B for Paper
// C for Scissors

// X -> lose
// Y -> draw
// Z -> win

const fs = require("fs");

const entry = fs.readFileSync("./entry.txt", { encoding: "utf-8" });
const entries = entry.split("\n").map((item) => item.split(" "));

const points = {
  A: { X: 0, Y: 3, Z: 6 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 0, Y: 3, Z: 6 },
};

const shape = {
  A: { X: "C", Y: "A", Z: "B" },
  B: { X: "A", Y: "B", Z: "C" },
  C: { X: "B", Y: "C", Z: "A" },
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
  const choosenShape = shape[round[0]][round[1]];
  total += pointsForChoosing[choosenShape];
}

console.log(total);
