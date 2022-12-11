function solution(a, b) {
    let top = getDivisors(a);
    let bottom = getDivisors(b);

    for (any of top) {
        if (bottom.indexOf(any) !== -1) {
            bottom.splice(bottom.indexOf(any), bottom.indexOf(any) + 1);
        }
    }
    let answer = bottom.every(x => x % 2 === 0 || x % 5 === 0) ? 1 : 2;
    return answer;
}

function getDivisors(num) {
    let arr1 = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) { arr1.push(i) }
    }
    let arr2 = [];
    for (any of arr1) {
        arr2.push(num / any);
    }
    arr1.shift();
    let arr = arr1.concat(arr2).sort((a, b) => a - b);
    return [...new Set(arr)];
}

