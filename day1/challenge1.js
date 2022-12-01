const fs = require("fs");

const entry = fs.readFileSync("./entry1.txt", { encoding: "utf-8" });
const entries = entry.split("\n");

let currentCalories = 0;
const showTop = 3;
let mostCalories = Array(3).fill(0);

for (let i = 0; i < entries.length; i++) {
  const calories = entries[i];
  if (calories === "") {
    for (let j = 0; j < showTop; j++) {
      if (currentCalories > mostCalories[j]) {
        const temp = mostCalories[j];
        mostCalories[j] = currentCalories;
        currentCalories = temp;
      }
    }
    currentCalories = 0;
  } else {
    currentCalories += parseInt(calories);
  }
}

console.log(
  `The elf carrying the most calories is carrying: ${mostCalories[0]} calories`
);

console.log(
  `The top ${showTop} elfs carrying the most calories are carrying: ${mostCalories}`
);

console.log(
  `Which gives us a total of: ${mostCalories.reduce(
    (acc, value) => acc + value,
    0
  )}`
);
