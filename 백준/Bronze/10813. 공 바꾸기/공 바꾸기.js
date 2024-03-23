let userInput = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let basketArr = new Array(+userInput[0].split(" ")[0]).fill(0);
basketArr = basketArr.map((item, index) => index + 1);

userInput = userInput.slice(1).map((item) => {
  const [i, j] = item.split(" ").map((el) => +el);
  const [prevI, prevJ] = [basketArr[i - 1], basketArr[j - 1]];
  basketArr[j - 1] = prevI;
  basketArr[i - 1] = prevJ;
});

console.log(basketArr.join(" "));