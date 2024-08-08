const { readFile, writeFile } = require("fs");


console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;
    writeFile("./content/result.txt", `${first}\n${second}\nThe End`, { flag: "a" }, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("done");
    });
  });
});
console.log('next')
