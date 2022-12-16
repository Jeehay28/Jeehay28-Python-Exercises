function solution(s) {
    let str = "";
    s.match(/[a-z]/g) !== null ? str += s.match(/[a-z]/g).sort().reverse().join("") : str+= "";
    s.match(/[A-Z]/g) !== null ? str += s.match(/[A-Z]/g).sort().reverse().join("") : str+= "";
    return str;
}