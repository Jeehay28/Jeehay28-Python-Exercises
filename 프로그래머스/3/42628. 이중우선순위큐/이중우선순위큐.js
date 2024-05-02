function solution(operations) {
 
    let que = []
    
     function removeMin(arr) {
        let temp =[...arr].sort((a, b) => a - b);
        return temp.slice(1);        
    }
    
    function removeMax(arr) {
        let temp =[...arr].sort((a, b) => b - a);
        return temp.slice(1);  
    }
    
    operations.map(item => {
              
        if(item === "D -1") {
           que = removeMin(que)
        }
        if(item === "D 1") {
           que = removeMax(que)
        }
        
        if(item.includes("I ")) {
            que.push(parseInt(item.replace("I ", "")))
        }
        
    })
    
    if(que.length === 0) {
        return [0, 0]
    } else {
        return [Math.max(...que), Math.min(...que)]
    }
    
}