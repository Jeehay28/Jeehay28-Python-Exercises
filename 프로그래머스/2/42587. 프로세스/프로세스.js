function solution(priorities, location) {
    let p = [...priorities]
    let que = [];
    let result;
    
    p = p.map((num, index) => {
        return [num, index];
    })
    
    while(p.length > 0) {
        const first = p.shift();
        const rest = p.map(item => item[0])
           
        if(first[0] >= Math.max(...rest)) {
            que.push(first)
           
        } else {
            p.push(first); 
        }
       
    }
    
    que.map((item, index) => {return item[1] === location ? result = index + 1 : 0})
    return result;
}