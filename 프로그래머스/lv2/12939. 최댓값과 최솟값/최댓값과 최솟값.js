function solution(s) {
    let arr = s.split(" ").map(x => parseInt(x));
    return Math.min(... arr).toString() + " " + Math.max(... arr).toString();
}