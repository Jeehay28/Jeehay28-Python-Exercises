let input2566 = require('fs').readFileSync(0, 'utf8').trim().toString().split('\n');

const arr2566: number[] = input2566.map((str: string) => str.split(" ")).flat().map((str: string) => +str);

const max = Math.max(...arr2566);

const locOfMax: number = arr2566.indexOf(max);

console.log(max);
console.log(Math.floor(locOfMax / 9) + 1, locOfMax - 9 * (Math.floor(locOfMax / 9)) + 1); 