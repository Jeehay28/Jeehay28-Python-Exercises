function solution(prices) {
    
    let stack = [];
    for(let i=0; i<prices.length; i++) {
    const key = prices[i]
    
        for(let j=i; j<prices.length; j++) {
            if(prices[j] < key) {
              stack.push(j-i);
                break;
            } 
            
            if(j === prices.length - 1) {
                stack.push(j-i);
            }
        }
        
    }

    return stack;

}