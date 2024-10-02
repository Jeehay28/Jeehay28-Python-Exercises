function solution(record) {
    let result = [];
    
    const obj = record.reduce((acc, cur) => {
        const [action, id, nickname] = cur.split(" ");
        acc[id] = nickname ? nickname : acc[id];
        return acc;
    }, {});
        
    for(any of record) {
        const [action, id, ...rest] = any.split(" ");
        
        if(action === "Enter") {
            result.push(`${obj[id]}님이 들어왔습니다.`);
        } else if(action === "Leave") {
           result.push(`${obj[id]}님이 나갔습니다.`); 
        } 
    }
        
    return result;
    
}