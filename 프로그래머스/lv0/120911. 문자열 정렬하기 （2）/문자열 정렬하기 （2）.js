function solution(my_string) {
    var answer = '';
    my_string = my_string.toLowerCase();
    let arr = my_string.split("");
    answer = arr.sort().join("");
    return answer;
}