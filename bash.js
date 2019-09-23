const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

process.stdout.write("promt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  cat(cmd);
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
