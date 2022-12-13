function solution(x) {
    return x % x.toString().split("").map(x => parseInt(x)).reduce((t, x) => t + x) === 0; 
}