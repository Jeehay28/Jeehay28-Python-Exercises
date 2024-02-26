function solution(n) {
    let arr = Array(n).fill(0);
    let answer = [];
    
    for(let i=0; i<n; i++) {
        arr[i] = 1;
        answer.push(arr);
        arr = Array(n).fill(0);
        
    }
    
    return answer;
    
    
    
}