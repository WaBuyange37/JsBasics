/**
 * 

Create a function to convert temperatures from Celsius to Fahrenheit.} celcius 
°F = °C × (9/5) + 32
 */
const { stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

function degreConveter(celcius) {
  let Fahrenheit = celcius * (9 / 5) + 32;
  console.log(`${celcius}C is conveted to ${Fahrenheit}F`);
}
rl.question("enter degree celcius,", (number) => {
  let cel = parseFloat(number);
  degreConveter(cel);
  rl.close();
});
