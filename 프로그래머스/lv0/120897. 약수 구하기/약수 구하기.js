function solution(n) {
    let answer = [];
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                answer.push(i)
            }
        }
    }
    else {
        answer = [1];
    }
    return answer;
}
