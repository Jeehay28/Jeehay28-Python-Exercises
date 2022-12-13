function solution(n) {
   let str = n.toString().split("").map(x => parseInt(x)).sort((a, b) => b - a).join("");
    return parseInt(str);
}