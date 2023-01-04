function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    let copyLost = [...lost];
    for (any of copyLost) {
        if (reserve.includes(any)) {
            lost.splice(lost.indexOf(any), 1);
            reserve.splice(reserve.indexOf(any), 1);
        }
    }
    
    for (any of reserve) {
        let before = any - 1;
        let after = any + 1;
        if (lost.includes(before)) {
            lost.splice(lost.indexOf(before), 1)
        } else if (lost.includes(after)) {
            lost.splice(lost.indexOf(after), 1)
        }
    }
    return n - lost.length;
}
