function solution(arr, query) {
    let answer = [...arr];
    query.map((item, index) => {
        index % 2 === 0 ? 
            answer = answer.slice(0, item+1) : 
        answer = answer.slice(item)
        
    });
    
    return answer;
}