function solution(my_string) {
    let arr = my_string.split("");
    let answer = [];
    for (any of arr){
        (any.match(/[a-z]/g) !== null ? answer.push(any.toUpperCase()) : answer.push(any.toLowerCase()))
    }
    return answer.join("");
}