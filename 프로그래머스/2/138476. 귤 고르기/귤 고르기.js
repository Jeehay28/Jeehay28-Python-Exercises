function solution(k, tangerine) {
   
    const result = tangerine.reduce((acc, num) => {
        
        acc[num.toString()] = (acc[num.toString()] || 0) + 1;
        return acc
    }, {})
    
    

    const values = Object.values(result).sort((a, b) => b - a);
    
    let cnt = values[0];
    
    if(values.length > 1) {
        for(let i=1; i<values.length; i++) {
            
        if(cnt >= k) {
            return i;
        } else {
            cnt += values[i];
            
            if(cnt >= k) {
                return i + 1 
            }
            
        }
        
            
    
    }
    } else {
        return 1;
    }
    
}


    