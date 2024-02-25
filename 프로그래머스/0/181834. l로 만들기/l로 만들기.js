function solution(myString) {
    
    const iCode = ("l").charCodeAt();
    return myString.split("").map(str => {
        return str.charCodeAt() < iCode ? "l" : str;
    }).join("");
    
}