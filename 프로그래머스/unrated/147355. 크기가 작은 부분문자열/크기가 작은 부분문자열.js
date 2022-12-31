function solution(t, p) {
    let digits = p.toString().length;
    let str = t.toString();
    let arr= [];
    for (let i=0; i<=str.length - digits; i++) {
        arr.push(str.substr(i, digits));
    }
    return arr.map(x => +x).filter(el => el <= p).length;
}