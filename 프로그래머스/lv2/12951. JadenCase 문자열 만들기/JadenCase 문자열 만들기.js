function solution(s) {
    s = s.toLowerCase();
    if (!s.startsWith(" ")) {
        s = s.replace(s[0], s[0].toUpperCase());
    }
    let arr = s.split("").entries();
    let loc = [];
    for (any of arr) {
        if (any[1] === " ") {
            loc.push(any[0])
        }
    }
    for (any of loc) {
        if (any <= s.length - 2) {
            console.log(any);
            s = s.substring(0, any + 1) + s[any + 1].toUpperCase() + s.substring(any + 2);
        }
    }
    return s;
}
