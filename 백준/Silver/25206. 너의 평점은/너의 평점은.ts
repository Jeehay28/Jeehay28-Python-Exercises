// let input25206 = require("fs")
//   .readFileSync("25206.txt", "utf8")
//   .trim()
//   .toString()
//   .split("\n");

  let input25206 = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .toString()
  .split("\n");


const grades: any = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const gradePoint: string[] = input25206.filter((str: string) => {
  const arr = str.split(" ");
  return !arr[2].includes("P");
});

let cnt: number = 0;

const sum: number = gradePoint.reduce((acc, currentValue) => {
  const arr: string[] = currentValue.split(" ");
  const point: string = arr[2].trim();
  const grade: number = parseFloat(arr[1].trim()) * parseFloat(grades[point]);
  cnt += parseFloat(arr[1].trim());

  return acc + grade;
}, 0);

console.log(sum / cnt);