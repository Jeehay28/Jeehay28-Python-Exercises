function solution(array, n) {
    var answer = 0;
    let cnt = 0;
    for (num of array) {
        if (num == n) {
            cnt += 1;
        }
    }
    answer = cnt;
    return answer;
}