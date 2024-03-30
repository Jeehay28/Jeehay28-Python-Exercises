let input10988 = require('fs').readFileSync(0, 'utf8').trim().toString();

const word: string = input10988;

const palindrome: number = word === word.split("").reverse().join("") ? 1 : 0;

console.log(palindrome);