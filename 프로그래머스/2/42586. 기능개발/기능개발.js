function solution(progresses, speeds) {
    let arr = progresses.map((item, index) => Math.ceil((100 - item) /speeds[index]));
    let result = [];
    let stack = [arr[0]];
   
    for(let i=1; i<arr.length; i++) {
        
        if(i ===  arr.length - 1) {
            if(Math.max(...stack) >= arr[i]) {
                stack.push(arr[i]);
                result.push(stack.length);
            } else {
                result.push(stack.length);
                result.push(1);       
            } 
            
        } else {
            
            if(Math.max(...stack) >= arr[i]) {
                stack.push(arr[i]);
            } else {
                result.push(stack.length);
                stack = [];
                stack.push(arr[i]);        
            } 
            
        }
    }
    
    return result;
    
}