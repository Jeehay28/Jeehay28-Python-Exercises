function solution(babbling) {
    let cnt = 0;
    for(any of babbling) {
        any = any.replaceAll("aya", "0").replaceAll("ye", "1"). replaceAll("woo", "2").replaceAll("ma", "3");
        if ((any.match(/[^0123]/g) || []).length === 0) {
            any.includes("00") || any.includes("11") || any.includes("22") || any.includes("33") ?
                cnt += 0 : cnt += 1;
            }
        }
    return cnt;
    }