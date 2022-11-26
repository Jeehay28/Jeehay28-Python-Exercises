function solution(my_string) {
    let answer = "";
    let arr = my_string.split("");
    for (let i=0; i<my_string.length; i++) {
        answer += arr.pop();
    }
    return answer;
}