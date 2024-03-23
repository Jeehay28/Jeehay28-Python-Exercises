let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = parseInt(input) / 4;

let arr = new Array(num + 1).fill('long');

arr[arr.length - 1] = 'int';

console.log(arr.join(" "));