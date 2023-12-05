const fs = require("fs");

const entry = fs.readFileSync("./entry.txt", { encoding: "utf-8" });

function findPacketMarker(entry) {
  for (let i = 4; i <= entry.length; i++) {
    const signal = entry.slice(i - 4, i);
    const hasFourDifferentLetters = new Set(signal).size === 4;
    if (hasFourDifferentLetters) {
      return i;
    }
  }
}

function findMessageMarker(entry) {
  for (let i = 14; i <= entry.length; i++) {
    const signal = entry.slice(i - 14, i);
    const hasFourteenDifferentLetters = new Set(signal).size === 14;
    if (hasFourteenDifferentLetters) {
      return i;
    }
  }
}

console.log("First packet marker:", findPacketMarker(entry));
console.log("First message marker:", findMessageMarker(entry));
