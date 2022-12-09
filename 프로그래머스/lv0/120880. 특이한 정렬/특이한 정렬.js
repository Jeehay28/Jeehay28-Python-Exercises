function solution(numlist, n) {
    const arr = numlist.map(x => x - n);
    const limit = Math.max(...arr.map(x => Math.abs(x)));
    let sum = [];
    if (arr.indexOf(0) !== -1) {
        sum.push(numlist[arr.indexOf(0)])
    }
    for (let i = 1; i <= limit; i++) {
        if (arr.indexOf(i) !== -1) {
            sum.push(numlist[arr.indexOf(i)]);
        }
        if (arr.indexOf(i * -1) !== -1) {
            sum.push(numlist[arr.indexOf(-1 * i)]);
        }
    }
    return sum;
}