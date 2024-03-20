let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(num => +num);

const [a, b, c] = input;
const answer = a+b+c;
console.log(answer);