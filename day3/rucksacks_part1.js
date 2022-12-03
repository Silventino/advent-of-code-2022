const fs = require("fs");

const entry = fs.readFileSync("./entry.txt", { encoding: "utf-8" });
const sacks = entry.split("\n").map((item) => {
  const sliceIndex = Math.floor(item.length / 2);
  return [item.slice(0, sliceIndex), item.slice(sliceIndex)];
});

function convertItemToPriority(item) {
  const priority = item.charCodeAt(0) - 96;
  if (priority < 0) return priority + 58;
  return priority;
}

function getItemPresentInBothCompartments(sack) {
  for (let j = 0; j < sack[0].length; j++) {
    const item = sack[0][j];
    if (sack[1].includes(item)) {
      return item;
    }
  }
  return false;
}

let total = 0;
for (let i = 0; i < sacks.length; i++) {
  const sack = sacks[i];
  const repeatedItem = getItemPresentInBothCompartments(sack);
  if (!repeatedItem) {
    console.log("No item present in both compartments.");
    continue;
  }

  console.log(`${repeatedItem}: ${convertItemToPriority(repeatedItem)}`);

  total += convertItemToPriority(repeatedItem);
}

console.log("Total: ", total);
