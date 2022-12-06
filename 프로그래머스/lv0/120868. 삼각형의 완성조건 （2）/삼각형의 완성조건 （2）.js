function solution(sides) {
    let cnt = 0;
    // 둘 중 하나 긴변
    let i = Math.abs(sides[0] - sides[1]) + 1;
    for (i; i <= Math.max(...sides); i++) {
        cnt += 1;
    }
    // 다른 한변이 긴변
    for (i=Math.max(...sides) + 1; i < sides[0] + sides[1]; i++) {
        cnt += 1;
    }
    return cnt;
}