function solution(sides) {
    const total = sides.reduce((t, n) => t + n);
    const max = Math.max(...sides);
    let answer = 0;
    if (max < (total - max)){
        answer = 1;
    } else {answer = 2;}
    return answer;
}