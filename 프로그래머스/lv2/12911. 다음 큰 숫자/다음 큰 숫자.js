function solution(n) {
    for(let i=n+1; i<1000000; i++) {
        if (n.toString(2).match(/1/g).length === i.toString(2).match(/1/g).length) {
            return i;
            break;
        }
    }
}