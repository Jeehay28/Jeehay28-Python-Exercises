function solution(binomial) {
    
    if(binomial.includes("+")) {
        let [x, y] = binomial.split("+").map(el => +el);
        return x + y;
        
    }
    
    if(binomial.includes("-")) {
        let [x, y] = binomial.split("-").map(el => +el);
        return x - y;
        
    }
    
    if(binomial.includes("*")) {
        let [x, y] = binomial.split("*").map(el => +el);
        return x * y;
        
    }
    
}