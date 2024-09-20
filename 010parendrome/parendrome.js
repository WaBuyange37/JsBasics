const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function palindromeChecker(enteredString) {
  let arr = enteredString.split("");
  let check = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    check.push(arr[i]);
  }
  let reversed = check.join("");
  if (reversed.toLowerCase() === enteredString.toLowerCase()) {
    return "It is a palindrome";
  }
  return "It is not a palindrome";
}

rl.question("Enter a word to check if it's a palindrome: ", (word) => {
  console.log(`\nResult: ${palindromeChecker(word)}`);
  rl.close();
});
