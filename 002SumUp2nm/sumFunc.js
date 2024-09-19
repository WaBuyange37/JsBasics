function summation(nber1, nber2) {
  /**Create a function that takes two numbers as arguments and returns their sum. */
  return nber1 + nber2;
}
let num1 = prompt("enter number one");
let num2 = prompt("enter number two");
let a = parseFloat(num1);
let b = parseFloat(num2);
document.write(summation(a, b));
document.write(`<br>second exercise`);

/**the above code is browser based
 * this in the commenr are terminal based
 * 
 * const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for the first number
rl.question('Enter number one: ', (num1) => {
  // Prompt for the second number
  rl.question('Enter number two: ', (num2) => {
    // Parse the inputs as floats and calculate the sum
    let sum = parseFloat(num1) + parseFloat(num2);
    
    // Output the result
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    
    // Close the readline interface
    rl.close();
  });
});

 */
