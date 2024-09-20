/**
 *
 * the program to find the largest number btn 3number
 * we must use for loop
 * so it require array
 * let's go
 */
//first is node interface creation
const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

//the function to do the operation
function maxFinder(num1, num2, num3) {
  let numbers = [num1, num2, num3];
  //define first number as a large one by default
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

rl.question("enter the first number: ", (nb1) => {
  rl.question("enter the second numbeer: ", (nb2) => {
    rl.question("enter the third numbeer: ", (nb3) => {
      //   let a = parseFloat(nb1);
      //   let b = parseFloat(nb2);
      //   let c = parseFloat(nb3);
      console.log("", maxFinder(nb1, nb2, nb3));
      rl.close();
    });
  });
});
