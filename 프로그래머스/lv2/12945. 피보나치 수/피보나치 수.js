function solution(n) {
    return getFn(n);
}

function getFn(num) {
    let fn =[0, 1];
    for (let i=2; i<=num; i++) {
        fn[i] = (fn[i-1] + fn[i-2]) % 1234567;
    }
    return fn[num];
}
