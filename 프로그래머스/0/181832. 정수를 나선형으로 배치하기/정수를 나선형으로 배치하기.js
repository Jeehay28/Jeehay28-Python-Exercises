function solution(n) {
   let answer = [];
    
    for(let i=0; i<n; i++) {
        let arr = [];
        for(let j=0; j<n; j++) {
            arr.push(0)
        }
        answer.push(arr)
    }
    
    let cnt = 1;
    let row = 0;
    let col = 0;
    
    answer[row][col] = cnt;
    
    const up = () => {
        row -= 1;
        cnt += 1;
        answer[row][col] = cnt;
    }
    
    const down = () => {
        row += 1;
        cnt += 1;
        answer[row][col] = cnt;
    }
    
    const right = () => {
        col += 1;
        cnt += 1;
        answer[row][col] = cnt;
    }
    
    const left = () => {
        col -= 1;
        cnt += 1;
        answer[row][col] = cnt;
    }
        
    const callNthTimes = (number, fn) => {
        for(let i=0; i<number; i++) {
            fn();
        }
    }
    
    for(let i=(n-1); i>=1; i--) {
        if(i === (n-1)) {
            callNthTimes(i, right);
            callNthTimes(i, down);
            callNthTimes(i, left);  
        } else if(i % 2 === (n-2) % 2){
            callNthTimes(i, up);
            callNthTimes(i, right);
        } else {
            callNthTimes(i, down);
            callNthTimes(i, left);
        }
    }
      
    return answer;
}