const { readFileSync, writeFileSync, appendFileSync } = require("fs");
// const fs = require('fs');

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

for (let i = 0; i < 10; i++) {
  writeFileSync("./content/result.txt", `${first}\n${second}\n`, { flag: "a" });
}
console.log('done');
console.log('next');

// imagine if we have 10 users use hthe app with sync code so it will make the app down