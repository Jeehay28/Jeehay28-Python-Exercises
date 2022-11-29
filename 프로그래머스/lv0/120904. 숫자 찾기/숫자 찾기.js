function solution(num, k) {
    let answer = 0;
    let arr = num.toString().split("").map(x => parseInt(x));
    answer = arr.indexOf(k);
    if (answer >=0) {
        return answer + 1;
    }
    return answer;
}