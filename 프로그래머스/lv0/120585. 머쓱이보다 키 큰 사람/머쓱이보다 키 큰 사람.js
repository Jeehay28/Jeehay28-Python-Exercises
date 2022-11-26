function solution(array, height) {
    var answer = 0;
    let cnt = 0;
    for (tall of array) {
        if (tall > height) {
            cnt += 1;
        }
    }
    answer = cnt;   
    return answer;
}