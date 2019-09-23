const fs = require("fs");

module.exports = function() {
  const pwd = process.cwd();
  // console.log(pwd);
  fs.readdir(".", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
      process.stdout.write("prompt > ");
    }
  });
};
