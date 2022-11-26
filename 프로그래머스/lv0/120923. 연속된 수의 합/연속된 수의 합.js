function solution(num, total) {
    var answer = [];
    let sum = 0;
    for (let i=0; i<num; i++){
       sum += i;
    }
    
    let x = (total - sum) / num;
    for (let i=0; i<num; i++){
        answer.push(x+i);
    }
    
    return answer;
}