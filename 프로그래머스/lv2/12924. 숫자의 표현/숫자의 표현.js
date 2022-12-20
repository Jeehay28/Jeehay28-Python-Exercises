function solution(n){
    let cnt = 1;
    let x = n;
    let arr = [];
    while (x > 0) {
        x = (n - addAll(cnt-1))/cnt;
        if (Number.isInteger(x) && x > 0) {
            arr.push(x);
        }
        cnt ++;
    }
    return arr.length;
}

function addAll(num) {
    let sum = 0;
    for(let i=0; i<=num; i++) {
        sum += i;
    }
    return sum;
}