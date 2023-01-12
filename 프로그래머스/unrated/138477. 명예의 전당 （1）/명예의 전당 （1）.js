function solution(k, score) {
    let daily = [];
    for (let i=1; i<=score.length; i++) {
        daily.push(score.slice(0, i).sort((a, b) => b - a).slice(0, k).pop());
    }
    return daily;
}