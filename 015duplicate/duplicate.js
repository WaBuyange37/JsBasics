const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
function dupo() {
  let arr = [1, 2, "1", 1, "a", "A", "v", "a", 100, "v"];
  let removo = [];
  for (let i = 1; i < arr.length; i++) {
    if (!removo.includes(arr[i])) {
      removo.push(arr[i]);
    }
  }
  console.log(` unduplicated array is: ${removo.join(",")}`);
}

rl.question(`do you want to remove duplicates?(y/n): `, (choice) => {
  if (choice === "y" || choice === "Y") {
    dupo();
    rl.close();
  } else {
    console.log("bye");
    rl.close();
  }
});
