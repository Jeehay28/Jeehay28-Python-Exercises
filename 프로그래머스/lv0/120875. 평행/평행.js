function solution(dots) {
    let arr = [];
    let answer = 0;
    for (let i=0; i < dots.length - 1; i++) {
        for (let j=i+1; j < dots.length; j++) {
        arr.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]));
        }
}
    arr.length === [...new Set(arr)].length ? answer = 0: answer = 1;    
    return answer;
}