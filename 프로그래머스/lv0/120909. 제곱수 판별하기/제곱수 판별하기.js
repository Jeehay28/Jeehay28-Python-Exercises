function solution(n) {
    var answer = 0;
    (Math.floor(Math.sqrt(n))**2 === n ? answer = 1 : answer = 2);
    return answer;
}