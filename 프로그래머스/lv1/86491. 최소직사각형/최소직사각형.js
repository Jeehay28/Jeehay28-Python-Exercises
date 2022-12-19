function solution(sizes) {
    let width = [];
    let height = [];
    for (any of sizes) {
        any.sort((a, b) => b - a);
        width.push(any[0]);
        height.push(any[1]);
    }
    return Math.max(...width) * Math.max(...height);
    
}