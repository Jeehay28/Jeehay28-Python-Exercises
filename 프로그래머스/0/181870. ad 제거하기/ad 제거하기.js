function solution(strArr) {
    
    return strArr.filter(str => {
        if(!str.includes("ad")) {
            return str;
        }
    })
    
}