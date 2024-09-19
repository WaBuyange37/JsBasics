/**Check Even or Odd

Write a function to check if a given number is even or odd.

sl is node.js based*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checker(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else if (isNaN(number)) {
    console.log(`try again your input is not valid`);
  } else {
    console.log(`${number} is odd`);
  }
}
rl.question("just enter a number", (num) => {
  let a = parseInt(num);
  checker(a);
  rl.close();
});
