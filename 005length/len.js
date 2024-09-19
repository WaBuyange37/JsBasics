const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
/**
 * Function to get the length of string
 * @param {string} ijambo - the string to mesure
 * @returns{number} - the length of a given string
 */
function leng(ijambo) {
  if (!isNaN(ijambo)) return "do not enter a number only a string of words";
  // The isNaN() function can sometimes behave unexpectedly, as it converts input into a number before checking
  return ijambo.length;
}
rl.question("enter a string:", (neno) => {
  console.log(`the length of ${neno} is ${leng(neno)}`);
  rl.close();
});
