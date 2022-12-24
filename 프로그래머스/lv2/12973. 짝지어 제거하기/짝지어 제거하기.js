function solution(s) {
    if (s.length < 2) {
        return 0;
    } else {
        let stack = [s[0]];
        for(let i=1; i<s.length; i++) {
            stack[stack.length-1] === s[i] ? stack.pop() : stack.push(s[i]);
            // console.log(stack)
        }
        return stack.length === 0 ? 1 : 0;
    }
    }