function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    if (d[0] <= budget) {
        while (d.reduce((total, num) => total + num) > budget) {
        d.pop()
        d.reduce((total, num) => total + num);
    }
        answer = d.length;
        
    }
         else {
        answer = 0;
    } 
    
    return answer;
}
    