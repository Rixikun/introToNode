const fs = require("fs");

module.exports = function(cmd) {
  //cat bash.js
  //[cat, bash.js]
  const arr = cmd.split(" ");
  if (arr[0] === "cat") {
    fs.readFile("/bash.js", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files);
        process.stdout.write("prompt > ");
      }
    });
  }
};
