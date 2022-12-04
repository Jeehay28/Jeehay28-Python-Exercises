function solution(spell, dic) {
    const alphabet = spell.sort().join("");
    let answer = 2;
    for (any of dic) {
        let str = [...new Set((any).split("").sort())].join("");
        if (str === alphabet) {
            answer = 1;
            break;
        }
    }
    return answer;
}