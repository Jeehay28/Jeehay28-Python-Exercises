function solution(n) {
    let answer = 0; 
    let arr = n.toString().split("");
    for (el of arr) {
        answer += parseInt(el);
    }
    return answer;
}