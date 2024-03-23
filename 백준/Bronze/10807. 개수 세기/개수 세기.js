let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [numOfInputNum, arrOfInputNum, numToFind] = [input[0], input[1].split(' '). map(num => +num), +input[2]];

const answer = arrOfInputNum.filter(el => el === numToFind).length;

console.log(answer);