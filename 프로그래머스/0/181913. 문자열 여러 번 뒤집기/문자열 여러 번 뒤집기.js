const solution = (my_string, queries) => {
    
    let answer = my_string;
    // console.log(str1.concat(' ', str2));  
    queries.map(([s, e]) => {
        
        let before = answer.slice(s, e+1);
        let after = [...before].reverse().join("");
        
        
        
        answer = answer.slice(0, s) + after + answer.slice(e+1);
        
    
    });
    
    return answer;

}