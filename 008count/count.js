const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
function countVowel(typeString) {
  let arr = typeString.split("");
  //   let vowel = ['a','i','u','o','e'];
  let mubazi = 0; //mubazi means a counter (kinyard to eng)

  for (let i = arr.length - 1; i >= 0; i--) {
    if (
      arr[i].toLowerCase() === "a" ||
      arr[i].toLowerCase() === "u" ||
      arr[i].toLowerCase() === "o" ||
      arr[i].toLowerCase() === "e" ||
      arr[i].toLowerCase() === "i"
    ) {
      mubazi++;
    }
  }
  return mubazi;
}
rl.question("enter a word: ", (word) => {
  console.log(`the number of a vowels in  ${word} is ${countVowel(word)}`);
  rl.close();
});
