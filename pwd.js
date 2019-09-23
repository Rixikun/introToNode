module.exports = function() {
  console.log(process.cwd().trim());
  process.stdout.write("\nprompt > ");
};
