function solution(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        cnt += getSubmultiple(i)
    }
    return cnt;
}

function getSubmultiple(n) {
        let arr  = [];
    for (let i = 1; i <= Math.sqrt(n) ; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    } 
    arr = [...new Set([...arr, ...arr.map(x => n/x) ])].sort((a, b) => a - b);
    return (arr.length >= 3 ? 1 : 0);
    }