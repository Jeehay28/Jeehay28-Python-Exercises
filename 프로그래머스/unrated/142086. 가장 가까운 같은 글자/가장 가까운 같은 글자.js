function solution(s) {
    let arr = [];
    for(let i=0; i<s.length; i++) {
        s.slice(0, i).lastIndexOf(s[i]) === -1 ? arr.push(-1) : arr.push(i - s.slice(0, i).lastIndexOf(s[i])) 
    }
    return arr;
}