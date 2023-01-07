function solution(X, Y) {
    let x = X.split("").map(el => el);
    let y = Y.split("").map(el => el);
    let arr = [];
    for (let i=9; i>=0; i--) {
        arr[9-i] = Math.min(x.filter(a => a===i.toString()).length, y.filter(a => a===i.toString()).length);
    }
    if (arr.every(el => el === 0)) {
        return "-1";
    } else {
        let str = "";
        arr.forEach((el, loc) => str += (9-loc).toString().repeat(el)); 
        if ([...new Set(str)].join("") === "0") {
            return "0";
        }
        return str;
    }
}
