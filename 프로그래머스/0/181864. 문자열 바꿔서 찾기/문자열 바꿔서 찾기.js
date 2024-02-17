function solution(myString, pat) {
    let newString;
    
    for(any of myString) {
        newString += any === "A" ? "B" : "A";
    }
    
    return newString.includes(pat) ? 1 : 0;
}

