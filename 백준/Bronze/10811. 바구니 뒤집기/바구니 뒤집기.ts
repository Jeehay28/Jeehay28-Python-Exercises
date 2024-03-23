const userInput = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

// Initialize basket array
const basketSize = +userInput[0].split(' ')[0];
const basketArr = Array.from({ length: basketSize }, (_, index) => index + 1);

// Process each swap operation
userInput.slice(1).forEach((str: string) => {
    const [start, end] = str.split(' ').map(Number);
    // Perform swap operation or other processing as needed
    const temp: number[] = basketArr.slice(start-1, end);
    let cnt: number = 0;

    for(let i=end-1; i>=start-1; i--) {
        basketArr[i] = temp[cnt];
        cnt += 1;

    }

});

console.log(basketArr.join(" "));