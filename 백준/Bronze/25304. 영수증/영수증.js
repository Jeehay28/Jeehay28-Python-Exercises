let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const total= parseInt(input[0]);
let reviewTotal = 0;
const items = input.slice(2);

for(let i=0; i<items.length; i++) {
    const [item, quantity] = items[i].split(" ").map(x => parseInt(x));
    reviewTotal += item * quantity;
}
console.log(reviewTotal === total ? "Yes" : "No")