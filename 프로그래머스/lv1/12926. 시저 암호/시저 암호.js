function solution(s, n) {
    const small = "abcdefghijklmnopqrstuvwxyz"
    const large = small.toUpperCase();
    let str = "";
    for(any of s) {
        if(large.includes(any)) {
           str += large[(large.indexOf(any) + n) % large.length];
        } else if (small.includes(any)){
           str += small[(small.indexOf(any) + n) % small.length];
        } else {
            str += any;
        }
    }
    return str;
}

