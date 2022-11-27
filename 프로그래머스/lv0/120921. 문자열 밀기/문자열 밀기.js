function solution(A, B) {
    var answer = 0;
    if (A === B) {answer = 0;} 
    else {
    for (let i=0; i<A.length-1; i++){
    let pick = A.slice(A.length-1-i, );
    let rest = A.slice(0, A.length-1-i);
    if (pick.concat(rest) === B) {
        answer = i+1;
        break;
    } 
        answer = -1;
}
    }
     return answer;
}