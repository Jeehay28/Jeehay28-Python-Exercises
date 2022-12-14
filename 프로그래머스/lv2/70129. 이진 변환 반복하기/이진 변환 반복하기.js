function solution(s) {
    let zero = 0;
    let cnt = 0;
    while (s != "1") {
        cnt += 1;
        zero += s.split("").filter(x => x === "0").length;
        s = s.split("").filter(x => x === "1").length.toString(2)
    }
    return [cnt, zero];
}