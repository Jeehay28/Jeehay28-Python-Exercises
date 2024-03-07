function solution(arr, queries) {
    
    return queries.map(([s, e, k]) => {
        const temp = arr.slice(s, e+1).filter(num => num > k);
        return temp.length > 0 ? Math.min(...temp) : -1
    })
    
}