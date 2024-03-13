function solution(arr) {
    let stk = [];
    let i = 0;
    
    for (i; i<arr.length; i++) {
        
        if(stk.length === 0) {
            stk.push(arr[i]);
            continue;
             
        } else if(stk.length > 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop();
            continue;
            
        } else if(stk.length > 0 && stk[stk.length - 1] !== arr[i]) {
            stk.push(arr[i]);
             continue;
        }
        
    }
    
    return stk.length > 0 ? stk : [-1];
}