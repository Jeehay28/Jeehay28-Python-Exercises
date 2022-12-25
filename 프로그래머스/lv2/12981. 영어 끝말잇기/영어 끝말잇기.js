function solution(n, words) {
    let stack = [words[0]];
    for (let i=1; i<words.length; i++) {
        if (stack.includes(words[i])) {
            return [i % n + 1, Math.floor(i / n) + 1];
            break;
        } else {
            if(stack[stack.length - 1].slice(-1) === words[i].slice(0, 1)) {
                stack.push(words[i]);
            } else {
                return [i % n + 1, Math.floor(i / n) + 1];
                break;
            }
        }   
    }
    return [0, 0];
}