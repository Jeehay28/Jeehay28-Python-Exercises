let input2745 = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const obj: { [key: string]: number } = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};

const arr2745: string[] = input2745[0].split(" ");

const [bNumber, notation] = arr2745;
let sum2745: number = 0;

let digit = 0; 
for (let i = bNumber.length -1; i >= 0; i--) {

    if (parseInt(bNumber[i]) >= 0 && parseInt(bNumber[i])<=9 ) {
        sum2745 += parseInt(bNumber[i]) * Math.pow(parseInt(notation), digit);

    } else {
        sum2745 += obj[bNumber[i]] * Math.pow(parseInt(notation), digit);
    } 

    digit += 1;
  
}

console.log(sum2745); 