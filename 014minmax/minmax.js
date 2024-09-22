const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
const arra = [1, 12, 3, 4, 78, 9, 0, 5];
function minmax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`the max is: ${max} and min is: ${min}\nfrom ${arr.join(",")}`);
}
minmax(arra);
rl.close();

/**
 * the simplest way is to use built in function
 * 
 * function findMaxMin(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return { max, min };
}
 */
