function solution(balls, share) {
    return Math.ceil(factorial(balls) / (factorial(balls - share)) / factorial(share));
}

function factorial(n) {
    let answer = 1;
    if (n <= 1) {
        answer = 1;
    } else {
        for (let i = 1; i <= n; i++) {
            answer *= i;
        }
    }
    return answer;
}
