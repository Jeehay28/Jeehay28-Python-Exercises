function solution(players, callings) {
    
    let result = [...players];
    let obj = {}
    
    result.forEach((key, index) => {
        return obj[key] = index;
    })
    
    callings.map(calling => {
        
        const loc = obj[calling];
        
        if(loc >= 1) {
            const playerToMoveDown = result[loc - 1];
            result[loc - 1] = calling;
            result[loc] = playerToMoveDown;
            
            obj[calling] = loc - 1;
            obj[playerToMoveDown] = loc;
            
        }  
               
    })
    
    return result;
    
    
}