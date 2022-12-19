function solution(s) {
    let arr = s.split(" ");
    let words = [];
    for (any of arr) {
        let str = "";
        for (let i=0; i<any.length; i++) {
            i % 2 === 0 ? str += any[i].toUpperCase() : str += any[i].toLowerCase();
        }
        words.push(str);
    }
    return words.join(" ");
}