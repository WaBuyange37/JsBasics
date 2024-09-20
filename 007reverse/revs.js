const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
function reverseString(typeString) {
  let arr = typeString.split("");
  let revArr = [];

  for (let i = arr.length; i > 0; i--) {
    revArr.push(arr.pop());
  }
  return revArr.join("");
}
rl.question("enter a word: ", (word) => {
  console.log(`the reverse of the ${word} is ${reverseString(word)}`);
  rl.close();
});
