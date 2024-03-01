const solution = (arr, queries) => {
    let answer = [...arr];
    
    queries.map(([s, e]) => {
        
        answer = answer.map((item, index) => index>=s && index <=e ? item + 1 : item)
        
    })
    
    return answer;
    
}