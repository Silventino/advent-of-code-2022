const fs = require("fs");

const entry = fs.readFileSync("./entry.txt", { encoding: "utf-8" });
const sacks = entry.split("\n");

function convertItemToPriority(item) {
  const priority = item.charCodeAt(0) - 96;
  if (priority < 0) return priority + 58;
  return priority;
}

function getItemPresentInGroup(group) {
  if (group.length < 3 || !group[0] || !group[1] || !group[2]) {
    return false;
  }

  for (let j = 0; j < group[0].length; j++) {
    const item = group[0][j];
    if (group[1].includes(item) && group[2].includes(item)) {
      return item;
    }
  }
  return false;
}

let total = 0;
for (let i = 0; i < sacks.length; i += 3) {
  const group = [sacks[i], sacks[i + 1], sacks[i + 2]];
  const badge = getItemPresentInGroup(group);
  if (!badge) {
    console.log("No item present in all group participants.");
    continue;
  }

  console.log(`${badge}: ${convertItemToPriority(badge)}`);

  total += convertItemToPriority(badge);
}

console.log("Total: ", total);
