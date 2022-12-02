function solution(hp) {
    let cnt = 0
    cnt += Math.floor(hp / 5);
    hp = Math.floor(hp % 5);
    cnt += Math.floor(hp / 3);
    cnt += Math.floor(hp % 3);
    return cnt;
}