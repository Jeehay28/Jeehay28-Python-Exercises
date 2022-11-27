function solution(array) {
    var answer = 0;
    for (num of array) {
        for (let i = 0; i < 5; i++) {
    if (num % 10 === 7) {
        answer += 1;
    }
    num = Math.floor(num / 10);
}
    }
    return answer;
}