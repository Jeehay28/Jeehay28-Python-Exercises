function solution(q, r, code) {
    
    return [...code].map((item, index) => {
        return index % q === r ? item : ""
    }).join("");
}