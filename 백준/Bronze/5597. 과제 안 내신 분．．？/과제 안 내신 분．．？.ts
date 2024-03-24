let input5597 = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n");

let arr: number[] = new Array(30).fill(0).map((num, _) => _ + 1);

input5597 = input5597.map((str: string) => +str);

arr.forEach((num: number) => {
  if (!input5597.includes(num)) {
    console.log(num);
  }
});
