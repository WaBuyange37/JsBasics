const { input, output, stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

//fibo func
function fibogenerator(n) {
  let fiboSequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    let nextNum = fiboSequence[i - 1] + fiboSequence[i - 2];
    fiboSequence.push(nextNum);
  }
  //   return fiboSequence;
  console.log(fiboSequence);
}
rl.question("enter a limit for fibonacci: ", (nber) => {
  let limit = parseInt(nber);
  fibogenerator(limit);
  rl.close();
});
