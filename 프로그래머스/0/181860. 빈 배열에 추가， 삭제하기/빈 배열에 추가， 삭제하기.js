function solution(arr, flag) {
    
    let x = [];
    
    flag.map((el, i) => {
        if(el === true) {
            const item = Array(arr[i] * 2).fill(arr[i])
            x.push(...item);
           
            
        } else {
            const item = x.slice(0, x.length - arr[i]);
            x = [...item];
            
        }
        
    })
    
    return x;
    
}