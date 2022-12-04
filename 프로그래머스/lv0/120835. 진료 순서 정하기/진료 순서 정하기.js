function solution(emergency) {
    let sorted = [...emergency];
    let result = [];
    sorted = sorted.sort((a, b) => b - a);
    for (level of emergency){
        result.push(sorted.indexOf(level) + 1);
    }
    return result;
}