function solution(ingredient) {
    let str = ingredient.join("");
    let cnt = 0;
    let pattern = /1231/
    while (pattern.test(str)) {
        let left = str.slice(0, str.search(pattern));
        left.slice(-8)
        let right = str.slice(str.search(pattern)+4);
        str = left.slice(-4) + str.slice(str.search(pattern)+4);
        cnt += 1
    }
    return cnt;
}
