function solution(myStr) {
    let answer = myStr.split("a").join(" ").split("b").join(" ").split("c").join(" ").split(" ").filter(x => x!== "");
    
    
    return answer.length === 0 ? ["EMPTY"] : answer; 
}