let input10798 = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .toString()
  .split("\n");

const arr10798: string[] = input10798.map((str: string) => str.trim());

const lengthOfElement: number = Math.max(
  ...arr10798.map((str: string) => str.trim().length)
);

let result: string = "";

for (let i = 0; i < lengthOfElement; i++) {
  arr10798.map((str: string) => {
    if (str[i] !== undefined) {
      result += str[i];
    }
  });
}

console.log(result);