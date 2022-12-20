function solution(arr, comm) {
    let answer = [];
    for (any of comm) {
        answer.push(
            arr
            .slice(any[0]-1, any[1])
            .sort((x, y) => x - y)[any[2]-1]
        ) 
    }
    return answer;
}