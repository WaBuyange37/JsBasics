const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
function sumArray(limit) {
  const arr = [];
  let sum = 0;
  if (limit <= 0 || isNaN(limit)) {
    console.log("try again later");
  } else {
    for (let i = 1; i <= limit; i++) {
      arr.push(i);
      sum += i;
    }
    console.log(` the sum 0f ${arr} is ${sum}`);
  }
}
rl.question("enter array limit from 1 to limit: ", (entered) => {
  let number = parseInt(entered);
  sumArray(number);
  rl.close();
});
