function solution(rsp) {
    let arr = rsp.split("");
    let str = "";
    for (any of arr) {
        if (any === "2") {
            str += "0";
        } else if (any === "0") {
            str += "5";
        } else {
            str += "2";
        }
    }
    return str;
}