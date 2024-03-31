let input2738 = require('fs').readFileSync(0, 'utf8').trim().toString().split('\n');

const N: number = parseInt(input2738[0].split(" ")[0])

const M: number = parseInt(input2738[0].split(" ")[1])

const A: number[] = input2738.slice(1, 1+N).map((str: string) => str.split(" ")).flat().map((str: string) => +str);
const B: number[] = input2738.slice(1+N).map((str: string) => str.split(" ")).flat().map((str: string) => +str);

let sum2738: number[] = [];

A.forEach((a, index) => {
    sum2738[index] = a + B[index];

})

for(let i=0; i<=N*M; i+=M) {
    console.log(...sum2738.slice(i, i+M))
}
