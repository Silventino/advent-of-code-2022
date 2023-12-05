const fs = require("fs");

const entry = fs.readFileSync("./entry.txt", { encoding: "utf-8" });
const lines = entry.split("\n");

let part2Began = false;
const part1 = [];
const part2 = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line === "") {
    part2Began = true;
    continue;
  }

  if (!part2Began) {
    part1.push(line);
  } else {
    part2.push(line);
  }
}

part1.pop();

let stacks = [];

for (let i = 0; i < part1.length; i++) {
  const line = part1[i];
  let stackNum = 0;
  for (let j = 1; j < line.length; j += 4) {
    const element = line[j];
    if (element !== " ") {
      if (stacks[stackNum]) {
        stacks[stackNum].push(element);
      } else {
        stacks[stackNum] = [element];
      }
    }
    stackNum += 1;
  }
}

// stacks are all inverted
for (let i = 0; i < stacks.length; i++) {
  stacks[i] = stacks[i].reverse();
}

let commands = [];
for (let i = 0; i < part2.length; i++) {
  const line = part2[i];
  commands.push(line.match(/\d+/g));
}

////// end of parsing

for (let i = 0; i < commands.length; i++) {
  const command = commands[i];
  const quantity = command[0];
  const from = parseInt(command[1]) - 1;
  const to = parseInt(command[2]) - 1;

  let temp = stacks[from].splice(stacks[from].length - quantity);
  stacks[to] = stacks[to].concat(temp);

  // for (let j = 0; j < quantity; j++) {
  //   const el = stacks[from].pop();
  //   stacks[to].push(el);
  // }
}

let result = "";
for (let i = 0; i < stacks.length; i++) {
  const stack = stacks[i];
  result += stack[stack.length - 1];
}

console.log(result);
