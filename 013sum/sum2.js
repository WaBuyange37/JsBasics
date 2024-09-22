const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

function askArrayElements(number, arr = [], i = 1) {
  if (i > number) {
    let sum = arr.reduce((acc, val) => acc + parseFloat(val), 0);
    console.log(`Your array is: [${arr.join(", ")}]   \nthe sum is: ${sum}`);
    rl.close(); // Close the interface when done
  } else {
    rl.question(`Enter array element ${i}: `, (entered) => {
      arr.push(entered);
      // Push the entered element into the array
      askArrayElements(number, arr, i + 1); // Recursively ask for the next element
    });
  }
}

rl.question("Enter array limit from 1 to limit: ", (entered) => {
  let number = parseInt(entered);
  if (!isNaN(number) && number > 0) {
    askArrayElements(number); // Start the recursive questioning
  } else {
    console.log("Please enter a valid number.");
    rl.close();
  }
});
