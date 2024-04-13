
let input2720 = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");  

input2720.shift();
input2720 = input2720.map((str: string) => parseInt(str));

input2720.map((num: number) => {
  console.log(count(num));
});

function count(num: number): string {
  let number: number = num;
  let q: number = 0;
  let d: number = 0;
  let n: number = 0;
  let p: number = 0;

  while (number >= 25) {
    q += Math.floor(number / 25);
    number = number - q * 25;
  }

  while (number >= 10) {
    d += Math.floor(number / 10);
    number = number - d * 10;
  }

  while (number >= 5) {
    n += Math.floor(number / 5);
    number = number - n * 5;
  }

  while (number >= 1) {
    p += Math.floor(number / 1);
    number = number - p * 1;
  }

  return [q, d, n, p].join(" ");
}
