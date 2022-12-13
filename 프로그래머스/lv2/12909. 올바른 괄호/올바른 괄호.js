function solution(s){
    let arr = s.split("").entries();
    let locOpen = [];
    let locClose = [];
    for (any of arr) {
        if(any[1] === "(") {
            locOpen.push(any[0]);
        } else if(any[1] === ")") {
            locClose.push(any[0]);
        }
    }
    if (locOpen.length === locClose.length && locOpen[0] < locClose[0]) {
        let answer = 1;
        for (let i=0; i<locOpen.length; i++) {
        locOpen[i] < locClose[i] ? answer *= 1 : answer *= 0;
        }     
        return answer=== 1 ? true : false;
    }
    return false;
}