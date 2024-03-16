function solution(s, skip, index) {
    const alphabet = ("abcdefghijklmnopqrstuvwxyz").repeat(3).split("");
    let answer = "";
    for(any of s) {
        const loc = alphabet.indexOf(any);
        answer += alphabet.slice(loc+1).filter(item => !skip.includes(item)).at(index - 1)
    }
   return answer;
}