function solution(str1, str2) {
    
    let arr1 = [];
    let arr2 = [];
    
    const re = /^[A-Z]+$/
    // ^ asserts the start of the string
    // + quantifier matches one or more of the preceding character class
    // $ asserts the end of the string
        
    for(let i=0; i<str1.length - 1; i++) {
        const temp1 = str1.slice(i, i+2).toUpperCase();
        if(re.test(temp1)) {
            arr1.push(temp1)
        } 
    }
    
    for(let i=0; i<str2.length -1; i++) {
        const temp1 = str2.slice(i, i+2).toUpperCase();
        if(re.test(temp1)) {
            arr2.push(temp1)
        }   
    }
    
    const key = [...new Set([...arr1, ...arr2])];
    let union = [];
    let intersection = [];
    
    for(any of key) {
        const a1 = arr1.filter(item => item === any);
        const a2 = arr2.filter(item => item === any);
        const min = calcMin(a1, a2)
        const max = calcMax(a1, a2)
        
        if(min.length !== 0) {
            intersection.push(...min)
        }
        
        if(max.length !==0) {
            union.push(...max)
        }        
    }
    
    return union.length === 0 ? 65536 : Math.floor(intersection.length / union.length * 65536)
   
    function calcMin(a, b) {
        let result;
        if(a.length === b.length) {
            result = a;
        } else if(a.length > b.length) {
            result = b;
        } else {
            result = a;
        }
        return result;
    }
    
    function calcMax(a, b) {
         let result;
        if(a.length === b.length) {
            result = a;
        } else if(a.length > b.length) {
            result = a;
        } else {
            result = b;
        }   
        return result;
    }    
}
