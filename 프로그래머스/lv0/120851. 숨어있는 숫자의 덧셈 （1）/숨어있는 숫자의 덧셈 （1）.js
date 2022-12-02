function solution(my_string) {
    let arr = my_string.split("").map(x=>parseInt(x)).filter(x => x > 0);
    return arr.reduce((t, a) => t + a);
}