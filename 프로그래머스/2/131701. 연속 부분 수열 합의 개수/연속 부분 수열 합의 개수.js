function solution(elements) {
    
    let arr = [];
    
    for(let i=0; i<elements.length; i++) {
        const adjustedElements = [...elements, ...elements.slice(0, i)]
        
        let next = i+1;
        for(let j=0; j<elements.length; j++) {
            const subSum = adjustedElements.slice(j, j+next).reduce((acc, curr) => acc + curr, 0);
            arr.push(subSum);
            // console.log(arr)
        }
    }
    
    return [... new Set(arr)].length
    
}