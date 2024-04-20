function solution(arr1, arr2) {
    
    const r = arr1.length;
    const c = arr2[0].length;
    let result = []
    for (let i=0; i<r; i++) {
        let arr = []
        
        for(let j=0; j<c; j++) {
            let temp = arr2.map(item => item[j]);
            let sum = 0
            arr1[i].forEach((item, index) => {
            sum += item * temp[index];
            })
            arr.push(sum)
        }
        result.push(arr)
    }
    
    return result; 
}