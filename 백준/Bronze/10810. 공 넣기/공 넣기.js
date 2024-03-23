let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numOfArr = +input[0].split(" ")[0];

let arr = new Array(numOfArr).fill(0);

input = input.slice(1).map((str) => str.split(" "));
input.map((item) => {
  const [start, end, ball] = item;

  for (let i = +start - 1; i <= +end - 1; i++) {
    arr[i] = +ball;
  }
});

console.log(arr.join(" "));
