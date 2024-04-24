function solution(s) {
    
    const slice = s.slice(2, s.length - 2).split("},{")
    const arr = slice
    .map(str => {
        return str.split(",").map(str => +str)})
    .sort((a, b) => {
        return a.length - b.length
    });
    
    let result = [];
       
    for(let i=0; i<arr.length; i++) {
       
       const temp = arr[i].filter(num => !result.includes(num));
       result.push(...temp) 
    }
    
    return result;
    
}