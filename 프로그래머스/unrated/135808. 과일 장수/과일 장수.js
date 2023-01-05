function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let sum = 0;
    // for (let i=0; i < Math.floor(score.length / m); i++) {
    //     sum += Math.min(...score.slice(i, m*(i+1))) * m;
    // }
    for (let i=0; i<Math.floor(score.length / m); i++) {
        // console.log(score[(i + 1) * m - 1])
        sum += score[(i + 1) * m - 1]; 
    }
    return sum * m;     
}