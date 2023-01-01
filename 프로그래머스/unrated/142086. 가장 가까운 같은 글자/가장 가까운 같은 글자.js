function solution(s) {
    // 자기 앞까지 슬라이드
    let arr = [];
    for(let i=0; i<s.length; i++) {
        s.slice(0, i).lastIndexOf(s[i]) === -1 ? arr.push(-1) : arr.push(i - s.slice(0, i).lastIndexOf(s[i])) 
    }
    return arr;
}