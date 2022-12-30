function solution(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += isPrime(i);
    }
    return sum;
}

const isPrime = n => {
    if (n === 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
                break;
            }
        }
        return true;
    }
}
