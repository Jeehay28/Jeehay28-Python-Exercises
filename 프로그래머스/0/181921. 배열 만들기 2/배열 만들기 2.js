function solution(l, r) {
    
    let answer = [];
    const re = /[1-4, 6-9]/g
    
    for(let i=l; i<=r; i++) {
       if(i.toString().match(re) === null) {
           answer.push(i)   
       }
    }
    
    return answer.length === 0 ? [-1] : answer;
}