function solution(s) {
    
    const obj = {
        "[" : "]",
        "(" : ")",
        "{" : "}"
    }
    
    let cnt = 0;

    if(s.length % 2 === 0) {
        
    for(let i=0; i<s.length; i++) {
        let temp = s.slice(i) + s.slice(0, i);
        
        while(temp.includes("{}") || temp.includes("[]") || temp.includes("()")) {
           
            temp = temp.replace("{}", "").replace("[]", "").replace("()", "")
        }
        
        if(temp === "") cnt += 1;
    }
        
        }
    
    return cnt;

}